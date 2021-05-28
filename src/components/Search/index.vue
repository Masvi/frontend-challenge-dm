<template>
  <div class="search">
    <Input 
      :type="'text'"
      :class="'form__input form__input--search'"
      :placeholder="'Filtrar por tags'"
    />
    <p>sdfsdfsdf</p>
  </div>
</template>

<script>
  import Input from '@/components/Form/Input';

  export default {
    name: 'Filter',
    components: {
      Input
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>