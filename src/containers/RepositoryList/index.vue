<template>
  <div>
    <Search />
    <Table :repos="repositories" />
  </div>
</template>

<script>
import Search from "@/components/Search";
import Table from "@/components/Table";

export default {
  name: "RepositoryList",
  components: {
    Search,
    Table
  },
  props: {
    repositories: {
      type: Array,
      default: () => []
    }
  }
}
</script>
