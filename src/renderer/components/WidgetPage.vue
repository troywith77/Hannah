<template>
	<div id="widget-page">
    大新闻啊大新闻
	</div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      const win = this.$electron.remote.getCurrentWindow();
      // document.addEventListener('mouseenter', () => {
      //   win.setSize(100, 300);
      // });
      // document.addEventListener('mouseleave', () => {
      //   win.setSize(100, 100);
      // });
    },
  };
</script>

<style lang="scss">
	html,
	body {
		height: 100%;
    margin: 0;
    background-color: #e35313;
    color: #fff;
  }
  body {
    -webkit-app-region: drag;
  }
  #widget-page {
    padding: 10px;
  }
</style>
