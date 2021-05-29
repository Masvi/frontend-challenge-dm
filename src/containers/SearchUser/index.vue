<template>
  <section class="search">
    <div class="wrap">
      <div class="search__container">
        <div class="search__form">
          <div
            v-if="error"
            class="search__error"
          >
            <h3>Ops, ocorreu um erro!</h3>
            <p>O usuário <strong>{{ username }}</strong> não existe. Por favor, verifique o nome de usuário e tente novamente.</p>
          </div>
          <div class="search__group">
            <p>https://github.com/</p>
            <Input 
              v-model="username"
              :type="'text'" 
              :class="`form__input ${error ? 'form__input--error' : ''}`"
              :placeholder="'Usuário do github'"
              @keyup="revalidateUsername"
            />
          </div>
          <Button 
            :type="'button'" 
            :class="'btn'" 
            :label="'Buscar repositórios'"
            @click="getStarredRepositoriesByUser"
          />
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
    props: {
      error: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        username: ''
      }
    },
    methods: {
      getStarredRepositoriesByUser () {
        console.log(this.username);
        this.$emit('get-repos', this.username);
      },
      revalidateUsername () {
        this.$emit('revalidate-username', this.username);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
