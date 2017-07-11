<template>
  <div>
    <div id="app-nav-container">
      <app-nav />
    </div>
    <div id="app-content-container">
      <bread-crumb></bread-crumb>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import AppNav from './common/Nav';
  import BreadCrumb from './common/BreadCrumb';
  export default {
    components: {
      AppNav,
      BreadCrumb,
    },
  };
</script>
