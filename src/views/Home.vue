<template>
  <div>
    <Loading v-show="isLoading" />
    <SearchUser 
      v-if="!repositories.length"
      :error="isError"
      @get-repos="getStarredRepositoriesByUser"
      @revalidate-username="revalidateUsername"
    />
    <RepositoryList
      v-else
      :repositories="repositories"
    />
  </div>
</template>

<script>
import Loading from '@/components/Loading';
import RepositoryList from '@/containers/RepositoryList';
import SearchUser from '@/containers/SearchUser';
import service from '@/services'

export default {
  name: 'Home',
  components: {
    SearchUser,
    RepositoryList,
    Loading
  },
  data() {
    return {
      repositories: [],
      isLoading: false,
      isError: false
    };
  },
  methods: {
    getStarredRepositoriesByUser(username) {
      this.isError = false;
      this.handleLoading();
      service.getStarredRepositories(username).then(({ data }) => {
        console.log('data', data);
        this.repositories = data;
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
    handleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
}
</script>
