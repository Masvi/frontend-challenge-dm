<template>
  <input 
    :type="type" 
    :class="classes" 
    :placeholder="placeholder"
    :value="value"
    :error="error"
    @input="$emit('input', $event.target.value)"
  >
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
      },
      value: {
        type: String,
        default: ''
      },
      error: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
