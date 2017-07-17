<template>
  <div class="landing-page">
    <el-tabs v-model="activeTab" type="card" closable @tab-click="clickTab" @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in tabs"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
        <component :is="item.content"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import LiveNews from './LiveNews/LiveNews'
  import Zhutiku from './Zhutiku/Zhutiku'
  import Ban from './Ban/Ban'
  import Test from './LandingPage/Test'

  export default {
    name: 'landing-page',
    computed: mapState({
      activeTab: state => state.Tabs.activeTab,
      tabs: state => state.Tabs.tabs
    }),
    methods: {
      removeTab(targetName) {
        this.$store.dispatch('removeTab', targetName)
      },
      clickTab(tab, e) {
        this.$store.dispatch('changeNav', tab.name)
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