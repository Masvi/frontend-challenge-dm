<template>
  <div>
    <BaseLoading v-show="isLoading" />
    <SearchUser />
  </div>
</template>

<script>

import BaseLoading from '@/components/Loading';
import service from '@/services'
import SearchUser from '@/containers/SearchUser';

export default {
  name: 'Home',
  components: {
    SearchUser,
    BaseLoading
  },
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    this.getStarredRepositoriesByUser();
  },
  methods: {
    getStarredRepositoriesByUser(username) {
      this.handleLoading();
      service.getStarredRepositories(username).then((data) => {
        console.log(data)
        this.handleLoading();
      });
    },
    handleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
}
</script>

<style>

</style>