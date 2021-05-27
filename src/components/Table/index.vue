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
      v-for="(repos, index) in repos"
      :key="index"
    >
      <div class="column">
        <label>Repository</label>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ repos.name ? repos.name : 'No name to show.'}}
        </a>
      </div>
      <div class="column">
        <label>Description</label>
        {{ repos.description ? repos.description : 'No description to show.' }}
      </div>
      <div class="column">
        <label>Language</label>
        {{ repos.language ? repos.language : 'No language to show.' }}
      </div>
      <div class="column">
        <label>Tags</label>
        <p v-if='repos.tags && repos.tags?.length'>
          {{ allTags(repos.tags) }}
        </p>
        <p v-else>
          No tags to show.
        </p>
      </div>
      <div class="column">
        edit
        <!-- <StyledEdit
          onClick={() => {
            setGlobalState({
              ...globalState,
              currentRepo: repository,
              isEditing: true
            });
          }}
          type="button"
          data-test={`edit-repository-tag-${index}`}
        >
          <span>Edit</span>
        </StyledEdit> -->
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
