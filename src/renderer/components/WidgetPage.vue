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
      document.addEventListener('mouseenter', () => {
        win.setSize(300, 300, true);
      });
      document.addEventListener('mouseleave', () => {
        win.setSize(300, 100, true);
      });
    },
  };
</script>

<style lang="scss">
	html,
	body {
		height: 100%;
    margin: 0;
  }
  body {
    -webkit-app-region: drag;
  }
  #widget-page {
    padding: 10px;
  }
</style>
