<template>
  <div 
    class="modal"
    :class="{
      'modal--show': isOpen
    }"
  >
    <div class="wrap">
      <form class="modal__container">
        <h5 class="modal__title">
          Editar tags para `repository name`
        </h5>
        <p>Adicione tags separadas por vírgula. (Ex.: front-end, back-end, development)</p>
        <Input
          type="text"
          class="form__input"
          placeholder="Insira suas tags separadas por vírgula."
        />
        <div class="modal__actions">
          <Button
            type="button"
            class="btn"
            :label="'Cancelar'"
            @click="closeModal"
          />
          <Button
            type="submit"
            class="btn"
            :label="'Salvar'"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Input from '@/components/Form/Input';
  import Button from '@/components/Form/Button';

  export default {
    name: 'Modal',
    components: {
      Input,
      Button
    },
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeModal() {
        this.$emit('set-is-open', false);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>