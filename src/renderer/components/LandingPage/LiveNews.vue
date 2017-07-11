<template>
  <ul class="live-news">
    <template v-for="msg of msgs">
      <live-news-item :msg="msg" />
    </template>
  </ul>
</template>

<script>
  import LiveNewsItem from './LiveNewsItem'

  export default {
    data() {
      return {
        msgs: []
      }
    },
    mounted() {
      this.$http.get('http://devapi.xuangubao.cn/api/pc/msgs?limit=30&subjids=9,10,35,469')
        .then(res => {
          console.log(res.data)
          this.msgs = res.data.NewMsgs
        })
    },
    components: {
      LiveNewsItem
    }
  }
</script>

<style>
  .live-news {
  }
</style>