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
import service from '@/services'
import SearchUser from '@/containers/SearchUser';

export default {
  name: 'Home',
  data() {
    return {
      repositories: [],
      isLoading: false
    };
  },
  components: {
    SearchUser,
    RepositoryList,
    BaseLoading
  },
  methods: {
    getStarredRepositoriesByUser(username) {
      this.handleLoading();
      service.getStarredRepositories(username).then((data) => {
        console.log(data)
        this.repositories = response.data;
        this.handleLoading();
      });
    },
    handleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
}
</script>
