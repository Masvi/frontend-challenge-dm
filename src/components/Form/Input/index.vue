<template>
  <input :type="type" :class="classes" :placeholder="placeholder">
</template>

<script>
  export default {
    name: 'Input', 
    props: {
      type: {
        type: String,
        default: 'text'
      },
      classes: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>