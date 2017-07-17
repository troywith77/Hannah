<template>
  <div id="app-nav">
    <el-menu default-active="LiveNews" class="el-menu-vertical-demo" @select="select">
      <el-menu-item index="LiveNews"><i class="el-icon-menu"></i>7x24</el-menu-item>
      <el-menu-item index="zhutiku"><i class="el-icon-setting"></i>主题库</el-menu-item>
      <el-menu-item index="ban"><i class="el-icon-star-off"></i>打板神器</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    methods: {
      select(index) {
        this.$store.dispatch('addTab', index)
      }
    },
  };
</script>

<style lang="scss">
  #app-nav {
    width: 180px;
    height: 100%;
    background-color: #eef1f6;
  }
</style>
