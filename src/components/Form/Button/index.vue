<template>
  <button :type="type" :class="classes">
    {{defaultValue}}
  </button>
</template>

<script>
  export default {
    name: 'Button', 
    props: {
      type: {
        type: String,
        default: 'button'
      },
      classes: {
        type: String,
        default: ''
      },
      defaultValue: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>