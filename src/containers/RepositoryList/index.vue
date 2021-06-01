<template>
  <div class="wrap">
    <div class="list">
      <Search 
        @input="findOnList"
      />
      <Table 
        :repos="repositories" 
        :is-open="isOpen"
        @set-is-open="setIsOpen"
      />
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
import { mapGetters } from 'vuex';

export default {
  name: "RepositoryList",
  components: {
    Search,
    Table,
    Modal
  },
  data() {
    return {
      list: [],
      isOpen: false
    }
  },
  computed: {
    ...mapGetters({
       repositories: "repositories",
    }),
    modalOpen() {
      return this.$store.getters['modalOpen'];
    },
  },
  created() {
    this.list = [...this.list, ...this.repositories]
  },
  methods: {
    setIsOpen(value) {
      this.isOpen = value;
    },
    findOnList(value) {
      if (value !== '') {
        const reposByTag = this.repositories
        .filter((repository) => {
          const tags = this.arrayToString(repository.tags || []);
          return tags.includes(value);
        });
      
        this.setFilteredTags(reposByTag);
      } else {
        this.setFilteredTags(this.list);
      }
    },
    setFilteredTags(value) {
      this.$store.dispatch({type: 'setRepositories', value: value})
    },
    arrayToString(array) {
      if (array.length === 0) {
        return '';
      }
      return array.join(', ');
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
