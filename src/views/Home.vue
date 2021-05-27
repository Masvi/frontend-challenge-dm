<template>
  <div>
    <Header/>
    <BaseLoading v-show="isLoading" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import BaseLoading from '@/components/BaseLoading';
import service from '@/services'

export default {
  name: 'Home',
  components: {
    Header,
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