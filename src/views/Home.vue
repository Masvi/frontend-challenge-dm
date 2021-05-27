<template>
  <div>
    <Header/>
    <SearchUser/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchUser from '@/containers/SearchUser';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    SearchUser
  }
}
</script>

<style>

</style>