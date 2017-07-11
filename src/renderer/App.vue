<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'baoer-electron',
  };
</script>

<style lang="scss">
  html,
  body,
  #app {
    min-height: 100vh;
  }
  #app-nav-container {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
  }
  #app-content-container {
    margin-left: 180px;
  }
</style>
