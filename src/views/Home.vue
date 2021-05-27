<template>
  <Header/>
</template>

<script>
import Header from '@/components/Header';
import service from '@/services'

export default {
  name: 'Home',
  components: {
    Header,
  },
  methods: {
    getStarredRepositoriesByUser(username) {
      service.getStarredRepositories(username).then((data) => {
        console.log(data)
      })
    }
  }
}
</script>

<style>

</style>