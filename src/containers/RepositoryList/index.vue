<template>
  <div class="wrap">
    <div class="list">
      <<<<<<< HEAD
      <Search 
        @input="findOnList"
      />
      <Table 
        :repos="repositories" 
        :is-open="isOpen"
        @set-is-open="setIsOpen"
      />
      =======
      <Search />
      <Table />
      >>>>>>> 53335a608d25dce3a16f0e6b8f6d393ac83d8345
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
    setIsOpen(value) {
      this.isOpen = value;
    },
    findOnList(value) {
      console.log(value)
    },
    setRepositoryTags(value) {
      this.$store.dispatch({type: 'setRepositoryTags', value: value.replace(/\s/g, '').split(',')})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
