<template>
  <div>
    <Header />
    <SearchUser 
      v-if="!repositories.length"
      @get-repos="getStarredRepositoriesByUser"
    />
    <RepositoryList
      v-else
      :repositories="repositories"
    />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchUser from '@/containers/SearchUser';
import RepositoryList from '@/containers/RepositoryList';
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
    SearchUser,
    RepositoryList
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
