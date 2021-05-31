<template>
  <div>
    <Loading v-show="isLoading" />
    <SearchUser 
      v-if="!repositories.length && !isEmpty"
      :error="isError"
      @get-repos="getStarredRepositoriesByUser"
      @revalidate-username="revalidateUsername"
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
import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';
import RepositoryList from '@/containers/RepositoryList';
import SearchUser from '@/containers/SearchUser';
import service from '@/services'

export default {
  name: 'Home',
  components: {
    Loading,
    NotFound,
    SearchUser,
    RepositoryList
  },
  data() {
    return {
      repositories: [],
      isLoading: false,
      isError: false,
      isEmpty: false
    };
  },
  methods: {
    getStarredRepositoriesByUser(username) {
      this.isError = false;
      this.handleLoading();
      service.getStarredRepositories(username).then(({ data }) => {
        console.log('data', data);
        this.repositories = data;
        if(!data.length) {
          this.isEmpty = true;
        }
        this.handleLoading();
      }).catch((err) => {
        console.log('err', err);
        this.isError = true;
        this.handleLoading();
      });
    },
    revalidateUsername() {
      this.isError = false;
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
