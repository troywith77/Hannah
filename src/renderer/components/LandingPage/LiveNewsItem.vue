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

<style>
  .live-news-item {
    margin-bottom: 8px;
  }
</style>