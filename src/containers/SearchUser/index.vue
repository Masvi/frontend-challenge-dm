<template>
  <section class="search">
    <div class="wrap">
      <div class="search__container">
        <form class="search__form">
          <div class="search__group">
            <p>https://github.com/</p>
            <Input 
              :type="'text'" 
              :class="'form__input'" 
              :placeholder="'Usuário do github'"
            />
          </div>
          <Button 
            :type="'button'" 
            :class="'btn'" 
            :label="'Buscar repositórios'"
            @click="getStarredRepositoriesByUser"
          />
        </form>
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