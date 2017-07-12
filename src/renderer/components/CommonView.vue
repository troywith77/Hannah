<template>
  <div>
    <div class="app-nav-container">
      <app-nav />
    </div>
    <div class="app-content-container">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import AppNav from './common/Nav';
  export default {
    components: {
      AppNav,
    },
  };
</script>

<style lang="scss" scoped>
  .app-nav-container {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
  }
  .app-content-container {
    margin-left: 180px;
  }
</style>