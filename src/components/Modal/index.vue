<template>
  <div 
    class="modal"
    :class="{
      'modal--show': isOpen
    }"
  >
    <div class="wrap">
      <form 
        class="modal__container"
        @submit.prevent="saveTagsAndExit"
      >
        <h5 class="modal__title">
          Editar tags para {{ currentRepository.name }}
        </h5>
        <p>Adicione tags separadas por vírgula. (Ex.: front-end, back-end, development)</p>
        <Input
          v-model="tags"
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
            type="button"
            class="btn"
            :label="'Salvar'"
            @click="saveTagsAndExit"
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
      },
      currentRepository: {
        type: Object,
        default: () => {}
      },
    },
    data() {
      return {
        tags: ''
      }
    },
    methods: {
      closeModal() {
        this.$emit('set-is-open', false);
      },
      saveTagsAndExit() {
        this.$emit('set-repository-tags', this.tags)
        this.$emit('set-is-open', false);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>