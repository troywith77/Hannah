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
    computed: {
      msgs() {
        // return this.$store.state.LiveNews.msgs
        return [{
          Title: '哈哈',
          Id: 34214
        }, {
          Title: '嘎嘎',
          Id: 343214
        }]
      }
    },
    mounted() {
      this.$store.dispatch('fetchLiveNews')
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