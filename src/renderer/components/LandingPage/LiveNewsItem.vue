<template>
  <li class="live-news-item">
    {{ msg.Title }}
  </li>
</template>

<script>
  export default {
    props: ['msg']
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