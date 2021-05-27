<template>
  <div>Frontend Challenge DELIVERY MUCH</div> 
</template>

<script>

import service from '../services';

export default {
  name: 'Home',
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