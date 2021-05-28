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
      >
        <div class="column">
          <label>Repository</label>
          <a
            href="{html_url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ repo.name ? repo.name : 'No name to show.' }}
          </a>
        </div>
        <div class="column">
          <label>Description</label>
          {{ repo.description ? repo.description : 'No description to show.' }}
        </div>
        <div class="column">
          <label>Language</label>
          {{ repo.language ? repo.language : 'No language to show.' }}
        </div>
        <div class="column">
          <label>Tags</label>
          <p v-if="repo.tags && repo.tags.length">
            {{ repo.tags | allTags }}
          </p>
          <p v-else>
            No tags to show.
          </p>
        </div>
        <div class="column">
          edit
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
    }
  },
  methods: {
    allTags (tags) {
      return tags.map((tag) => {
        return `#${tag} `;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
