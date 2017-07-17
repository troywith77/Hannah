<template>
  <div>
    <el-button @click="test">test</el-button>
    <el-button @click="toggle">toggle widget</el-button>
    <el-button @click="notify">notify</el-button>
  </div>
</template>

<script>
  const notifier = require('node-notifier');

  export default {
    methods: {
      test() {
        this.$electron.ipcRenderer.send('open-information-dialog')
      },
      toggle() {
        this.$electron.ipcRenderer.send('toggle-widget')
      },
      notify() {
        notifier.notify({
          'title': 'My notification',
          'message': 'Hello, there!',
          sound: true
        });
      }
    },
    mounted() {
      this.$electron.ipcRenderer.on('information-dialog-selection', function(e, args) {
        console.log(e, args)
      })
      // const {BrowserWindow} = this.$electron.remote
      // let win = new BrowserWindow({width: 800, height: 600})
      // win.loadURL('https://github.com')
    }
  }
</script>