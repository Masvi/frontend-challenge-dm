<template>
  <div>
    <Table :repos="repositories" />
  </div>
</template>

<script>
import Table from "@/components/Table/index";

export default {
  name: "RepositoryList",
  components: {
    Table,
  },
  props: {
    repositories: {
      type: Array,
      default: () => []
    }
  }
}
</script>
