<template>
  <div class="wrap">
    <div class="list">
      <Search />
      <Table 
        :repos="repositories" 
        :is-open="isOpen"
        :current-repository="currentRepository"
        @set-is-open="setIsOpen"
        @set-current-repository="setCurrentRepository"
      />
      <Modal 
        :is-open="isOpen" 
        :current-repository="currentRepository"
        @set-is-open="setIsOpen"
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
  props: {
    repositories: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      isOpen: false,
      currentRepository: {}
    }
  },
  methods: {
    setIsOpen(value) {
      this.isOpen = value;
    },
    setCurrentRepository(value) {
      this.currentRepository = value;
    },
    setRepositoryTags(value) {
      this.currentRepository.tags = value.replace(/\s/g, '').split(',');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
