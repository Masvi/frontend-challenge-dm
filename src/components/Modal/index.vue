<template>
  <div 
    class="modal"
    :class="{
      'modal--show': modalOpen
    }"
    data-test="modal-tags"
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
          data-test="edit-tag-input"
        />
        <div class="modal__actions">
          <Button
            type="button"
            class="btn"
            data-test="cancel-edit-repository"
            :label="'Cancelar'"
            @click="closeModal"
          />
          <Button
            type="button"
            class="btn"
            data-test="save-edit-repository"
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
  import { mapGetters } from 'vuex';

  export default {
    name: 'Modal',
    components: {
      Input,
      Button
    },
    data() {
      return {
        tags: ''
      }
    },
    computed: {
      ...mapGetters({
       currentRepository: "currentRepository",
      }),
      modalOpen() {
        this.setValue()
        return this.$store.getters['modalOpen'];
      },
      currentRepository() {
        return this.$store.getters['currentRepository'];
      }
    },
    methods: {
      closeModal() {
        this.$store.dispatch({ type: 'setModalClose' });
      },
      saveTagsAndExit() {
        this.$emit('set-repository-tags', this.tags)
        this.closeModal();
      },
      setValue() {
        if (this.currentRepository.tags.length !== 0) { 
          this.tags = this.currentRepository.tags.join(', ');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>