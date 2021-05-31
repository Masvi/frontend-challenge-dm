<template>
  <div class="wrap">
    <div class="list">
      <Search />
      <Table 
        :repos="repositories" 
        :is-open="isOpen"
        @set-is-open="setIsOpen"
      />
      <Modal 
        :is-open="isOpen" 
        @set-is-open="setIsOpen"
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
  props: {
    repositories: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    setIsOpen(value) {
      this.isOpen = value;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
