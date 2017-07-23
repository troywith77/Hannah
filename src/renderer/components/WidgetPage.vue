<template>
	<div class="widget">
    <div class="widget-main">大新闻啊大新闻</div>
    <div class="widget-options">
      <span @click="closeWidget">X</span>
      <span @click="setSize">{{ minSize ? '+' : '-' }}</span>
      <span class="drag-handler">#</span>
    </div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        win: null,
        minSize: true
      };
    },
    methods: {
      setSize() {
        if(this.minSize) {
          this.win.setSize(600, 400)
        } else {
          this.win.setSize(600, 100)
        }
        this.minSize = !this.minSize
      },
      closeWidget() {
        this.$electron.ipcRenderer.send('toggle-widget')
      }
    },
    mounted() {
      this.win = this.$electron.remote.getCurrentWindow();
    },
  };
</script>

<style lang="scss">
	html,
	body {
    height: 100%;
		width: 100%;
    margin: 0;
    padding: 0;
    color: #000;
    overflow: hidden;
    background: #ccc;
  }
  .drag-handler {
    -webkit-app-region: drag;
    cursor: pointer;
  }
  .widget {
    display: flex;
    padding: 10px;
    &-main {
      flex: 1;
    }

    &-options {
      display: flex;
      flex-direction: column;
      flex-basis: 30px;
      -webkit-app-region: no-drag;
      span {
        cursor: pointer;
      }
    }
  }
</style>
