<template>
  <div>
    <BaseLoading v-show="isLoading" />
    <SearchUser 
      v-if="!repositories.length"
      @get-repos="getStarredRepositoriesByUser"
    />
    <RepositoryList
      v-else
      :repositories="repositories"
    />
  </div>
</template>

<script>
import BaseLoading from '@/components/Loading';
import RepositoryList from '@/containers/RepositoryList';
import SearchUser from '@/containers/SearchUser';
import service from '@/services'

export default {
  name: 'Home',
  components: {
    SearchUser,
    RepositoryList,
    BaseLoading
  },
  data() {
    return {
      repositories: [],
      isLoading: false
    };
  },
  methods: {
    getStarredRepositoriesByUser(username) {
      this.handleLoading();
      service.getStarredRepositories(username).then(({ data }) => {
        this.repositories = data;
        this.handleLoading();
      });
    },
    handleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
}
</script>
