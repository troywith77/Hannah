<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Hannah'
  };
</script>

<style lang="scss">
  @font-face {
    font-family: 'myFont';
    src: url('./assets/fonts/msyh.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body,
  #app {
    min-height: 100vh;
    font-family: myFont;
  }

  .stock-up {
    color: #f3564d
  }

  .stock-down {
    color: #1cbf7b
  }

  .normal-pre-text {
    font-family: inherit;
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }
</style>
