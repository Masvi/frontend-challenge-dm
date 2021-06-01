<template>
  <div class="wrap">
    <div class="list">
      <Search />
      <Table />
      <Modal 
        v-if="modalOpen"
        @set-repository-tags="setRepositoryTags"
      />
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import Table from "@/components/Table";
import Modal from "@/components/Modal";

export default {
  name: "RepositoryList",
  components: {
    Search,
    Table,
    Modal
  },
  computed: {
    modalOpen() {
      return this.$store.getters['modalOpen'];
    },
  },
  methods: {
    setRepositoryTags(value) {
      this.$store.dispatch({type: 'setRepositoryTags', value: Array.from(new Set(value.replace(/\s/g, '').split(',')))})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
