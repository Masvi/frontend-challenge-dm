<template>
  <section class="notfound">
    <div class="wrap">
      <div class="notfound__container">
        <h2 class="notfound__title">
          Nada encontrado!
        </h2>
        <p>Ops, infelizmente não existem repositórios favoritados para este usuário.</p>
        <Button 
          :type="'button'" 
          :label="'Buscar usuário'"
          :class="'btn'"
          @click="getInitialScreen"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import Button from '@/components/Form/Button';

  export default {
    name: 'NotFound',
    components: {
      Button
    },
    methods: {
      getInitialScreen() {
        this.$emit('get-initial', this.isEmpty);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>