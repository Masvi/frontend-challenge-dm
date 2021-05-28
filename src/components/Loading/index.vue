<template>
  <transition name="fade">
    <div class="loading">
      <img 
        src="@/assets/loading.svg"  
        alt="Loading"
      > 
    </div>
  </transition>
</template>

<script>

export default {
  components: {
  },
};
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
