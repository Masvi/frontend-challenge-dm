<template>
  <div class="table">
    <div class="table__header">
      <div>Repository</div>
      <div>Description</div>
      <div>Language</div>
      <div>Tags</div>
      <div>Edit</div>
    </div>
    <div class="table__content">
      <div
        v-for="(repo, index) in repos"
        :key="index"
        class="table__columns"
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
          <p v-if="repo.tags && repo.tags.length">
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
  props: {
    repos: {
      type: Array,
      default: () => [],
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    currentRepository: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    openModal(repo) {
      this.$emit('set-is-open', true);
      this.$emit('set-current-repository', repo);
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
