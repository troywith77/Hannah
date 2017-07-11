<template>
  <div>
    <div id="app-nav-container">
      <app-nav />
    </div>
    <div id="app-content-container">
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
