<template>
  <div>
    <Table :repos="repositories" />
  </div>
</template>

<script>
import Table from "../../components/Table/index";

export default {
  name: "RepositoryList",
  props: {
    repositories: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Table,
  }
}
</script>
