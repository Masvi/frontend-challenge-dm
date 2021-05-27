<template>
  <section class="search">
    <div class="wrap">
      <div class="search__container">
        <form class="search__form">
          <Input type="text" class="form__input" placeholder="Usuário do github"/>
          <Button type="submit" class="btn" defaultValue="Buscar repositórios"/>
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
  import service from '@/services'

  export default {
    name: 'SearchUser',
    components: {
      Input,
      Button
    },
    methods: {
      getStarredRepositoriesByUser(username) {
        service.getStarredRepositories(username).then((data) => {
          console.log(data)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>