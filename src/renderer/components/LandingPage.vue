<template>
  <div class="landing-page">
    <el-tabs v-model="activeTab" type="card" closable @tab-click="clickTab" @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in tabs"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <component :is="item.component" :params="item.params"></component>
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
  import Message from './Message/Message'
  import Stock from './Stock/Stock'

  export default {
    computed: mapState({
      activeTab: state => state.Tabs.activeTab,
      tabs: state => state.Tabs.tabs
    }),
    methods: {
      removeTab(key) {
        this.$store.dispatch('removeTab', key)
      },
      clickTab(tab) {
        this.$store.dispatch('clickTab', tab.name)
      }
    },
    components: {
      LiveNews,
      Test,
      Zhutiku,
      Ban,
      Message,
      Stock
    },
  };
</script>

<style lang="scss" scoped>
  .landing-page {
    padding: 5px 15px;
  }
</style>