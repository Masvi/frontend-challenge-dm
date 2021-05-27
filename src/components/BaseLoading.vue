<template>
  <transition name="fade">
    <div class="base-loading">
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

<style lang="scss">
.base-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
}
</style>
