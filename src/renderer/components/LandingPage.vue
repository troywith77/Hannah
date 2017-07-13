<template>
  <div class="landing-page">
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="实时新闻" name="liveNews">
        <live-news />
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <test />
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import LiveNews from './LandingPage/LiveNews'
  import Test from './LandingPage/Test'

  export default {
    name: 'landing-page',
    data() {
      return {
        activeTab: 'liveNews'
      }
    },
    components: {
      LiveNews,
      Test
    },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  .landing-page {
    padding: 5px 15px;
  }
</style>