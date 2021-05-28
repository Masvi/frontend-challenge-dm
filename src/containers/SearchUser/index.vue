<template>
  <section class="search">
    <div class="wrap">
      <div class="search__container">
        <form class="search__form">
          <Input type="text" class="form__input" placeholder="Usuário do github"/>
          <Button type="button" @click="getStarredRepositoriesByUser" class="btn" defaultValue="Buscar repositórios"/>
        </form>
        <div class="search__info">
          <p>Insira o nome de usuário sem o @ no campo acima.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Input from '@/components/Form/Input';
  import Button from '@/components/Form/Button';

  export default {
    name: 'SearchUser',
    components: {
      Input,
      Button
    },
    methods: {
      getStarredRepositoriesByUser (username) {
        console.log(username);
        this.$emit('get-repos', username);
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>