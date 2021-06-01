<template>
  <div
    class="table"
    data-test="repositories-container"
  >
    <div class="table__header">
      <div>Repository</div>
      <div>Description</div>
      <div>Language</div>
      <div>Tags</div>
      <div>Edit</div>
    </div>
    <div class="table__content">
      <div
        v-for="(repo, index) in repositories"
        :key="index"
        class="table__columns"
        data-test="repository-item"
      >
        <div class="column">
          <label class="column__label">Repository</label>
          <a
            class="column__anchor"
            :href="repo.html_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ repo.name ? repo.name : 'No name to show.' }}
          </a>
        </div>
        <div class="column">
          <label class="column__label">Description</label>
          {{ repo.description ? repo.description : 'No description to show.' }}
        </div>
        <div class="column">
          <label class="column__label">Language</label>
          {{ repo.language ? repo.language : 'No language to show.' }}
        </div>
        <div class="column">
          <label class="column__label">Tags</label>
          <p 
            v-if="repo.tags && repo.tags.length && repo.tags[0] !== ''" 
            :data-test="`tags-repository-${index + 1}`"
          >
            {{ displayTagsAsText(repo.tags) }}
          </p>
          <p v-else>
            No tags to show.
          </p>
        </div>
        <div class="column">
          <button
            class="column__edit"
            type="button"
            :data-test="`edit-repository-${index + 1}`"
            @click="openModal(repo)"
          >
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  computed: {
    repositories() {
      return this.$store.getters['repositories'];
    }
  },
  methods: {
    openModal(repo) {
      this.$store.dispatch({ type: 'setModalOpen' });
      this.$store.dispatch({ type: 'setCurrentRepository', value: repo });
    },
    displayTagsAsText(tags) {
      return tags && tags.join(', ');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
