<template>
  <button 
    :type="type" 
    :class="classes"
    @click="$emit('click')"
  >
    {{ label }}
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
      label: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>