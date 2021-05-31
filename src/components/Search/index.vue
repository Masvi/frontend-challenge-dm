<template>
  <div class="search">
    <Input 
      :type="'text'"
      :class="'form__input form__input--search'"
      :placeholder="'Filtrar por tags'"
    />
  </div>
</template>

<script>
  import Input from '@/components/Form/Input';

  export default {
    name: 'Search',
    components: {
      Input
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
