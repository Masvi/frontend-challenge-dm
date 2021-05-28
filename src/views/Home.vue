<template>
  <div>
    <BaseLoading v-show="isLoading" />
    <SearchUser 
      v-if="!repositories.length && !isEmpty"
      @get-repos="getStarredRepositoriesByUser"
    />
    <RepositoryList
      v-if="repositories.length && !isEmpty"
      :repositories="repositories"
    />
    <NotFound
      v-if="!repositories.length && isEmpty"
      @get-initial="getInitialScreen"
    />
  </div>
</template>

<script>
import BaseLoading from '@/components/Loading';
import NotFound from '@/components/NotFound';
import RepositoryList from '@/containers/RepositoryList';
import SearchUser from '@/containers/SearchUser';
import service from '@/services'

export default {
  name: 'Home',
  components: {
    SearchUser,
    NotFound,
    BaseLoading,
    RepositoryList
  },
  data() {
    return {
      repositories: [],
      isLoading: false,
      isEmpty: false
    };
  },
  methods: {
    getStarredRepositoriesByUser(username) {
      this.handleLoading();
      service.getStarredRepositories(username).then(({ data }) => {
        this.repositories = data;
        if(!data.length) {
          this.isEmpty = true;
        }
        this.handleLoading();
      });
    },
    getInitialScreen() {
      this.isEmpty = false;
    },
    handleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
}
</script>
