import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let win
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    // height: 563,
    // useContentSize: true,
    // width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.maximize()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

function createFramelessWindow() {
  win = new BrowserWindow({
    frame: false,
    width: 300,
    height: 100,
    // resizable: false,
    x: 1500,
    y: 100,
  });
  win.on('close', () => { win = null; });
  win.loadURL(`${winURL}/#/widget`);
  win.show();
  win.setAlwaysOnTop(true, 'status');
}

app.on('ready', createWindow)
app.on('ready', createFramelessWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */