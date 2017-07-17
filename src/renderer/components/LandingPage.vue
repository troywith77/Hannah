<template>
  <div class="landing-page">
    <el-tabs v-model="activeTab" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in tabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <component :is="item.content"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import LiveNews from './LiveNews/LiveNews'
  import Zhutiku from './Zhutiku/Zhutiku'
  import Ban from './Ban/Ban'
  import Test from './LandingPage/Test'

  export default {
    name: 'landing-page',
    computed: {
      activeTab() {
        return this.$store.state.Tabs.activeTab
      },
      tabs() {
        return this.$store.state.Tabs.tabs
      }
    },
    data() {
      return {}
    },
    methods: {
      removeTab(targetName) {
        this.$store.dispatch('removeTab', targetName)
      }
    },
    components: {
      LiveNews,
      Test,
      Zhutiku,
      Ban
    },
  };
</script>

<style lang="scss" scoped>
  .landing-page {
    padding: 5px 15px;
  }
</style>