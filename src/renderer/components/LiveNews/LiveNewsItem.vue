<template>
  <li class="live-news-item">
    <div @click="clickMsg">{{ msg.Title }}</div>
    <div>
      <stock-group v-if="msg.Stocks" :stocks="msg.Stocks" />
    </div>
  </li>
</template>

<script>
  import StockGroup from '../common/StockGroup/stock-group'

  export default {
    props: ['msg'], 
    methods: {
      clickMsg() {
        this.$store.dispatch('addTab', {
          label: this.msg.Title,
          key: `Message-${this.msg.Id}`,
          component: 'Message',
          params: {
            id: this.msg.Id
          }
        })
      }
    },
    components: {
      StockGroup
    }
  }
</script>

<style lang="scss" scoped>
  .live-news-item {
    margin-bottom: 8px;
    padding: 15px 20px;
    border-bottom: 1px solid #f5f5f5;
    line-height: 1.35;
  }
</style>