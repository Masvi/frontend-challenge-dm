<template>
  <div>
    <Header />
    <SearchUser 
      v-if="!repositories.lenght"
      @get-repos="getStarredRepositoriesByUser"
    />
    <pre v-else>
      {{ repositories }}
    </pre>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchUser from '@/containers/SearchUser';
import service from '@/services'

export default {
  name: 'Home',
  data() {
    return {
        repositories: [],
      };
  },
  components: {
    Header,
    Footer,
    SearchUser
  },
  methods: {
      getStarredRepositoriesByUser (username) {
        service.getStarredRepositories(username).then((response) => {
          console.log(response.data);
          this.repositories = response.data;
        })
      }
    }
}
</script>

<style>

</style>