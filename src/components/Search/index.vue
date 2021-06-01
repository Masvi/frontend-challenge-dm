<template>
  <div class="search">
    <Input 
      v-model="search"
      :type="'text'"
      :class="'form__input form__input--search'"
      :placeholder="'Filtrar por tags'"
      @keyup="$emit('input', search)"
      data-test="search-term"
    />
  </div>
</template>

<script>
  import Input from '@/components/Form/Input';

  export default {
    name: 'Search',
    components: {
      Input
    },
    data() {
      return {
        search: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
