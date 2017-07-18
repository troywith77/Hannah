<template>
  <div id="app-nav">
    <el-menu :default-active="active" class="el-menu-vertical-demo" @select="select">
      <el-menu-item
        v-for="nav of navs"
        :index="nav.index"
        :title="nav.label"
        :key="nav.index"
      >
        <i :class="nav.icon"></i>{{ nav.label }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    computed: {
      active() {
        return this.$store.state.Nav.activeNav
      },
      navs() {
        return this.$store.state.Nav.navs
      }
    },
    methods: {
      select(index, indexPath, e) {
        this.$store.dispatch('addTab', {
          component: index, 
          key: index,
          label: e.$el.title
        })
        // this.$store.dispatch('changeNav', index)
      }
    }
  };
</script>

<style lang="scss">
  #app-nav {
    width: 180px;
    height: 100%;
    background-color: #eef1f6;
  }
</style>
