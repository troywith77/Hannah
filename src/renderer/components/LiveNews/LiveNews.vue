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
        return this.$store.state.LiveNews.msgs
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