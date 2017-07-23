import { app, BrowserWindow } from 'electron'

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080/#/widget`
  : `file://${__dirname}/index.html#/widget`

let win

function createFramelessWindow() {
  win = new BrowserWindow({
    frame: false,
    width: 600,
    height: 100,
    x: 1500,
    y: 100,
    // resizable: false,
    // transparent: true,
    // closable: false
  });
  win.on('close', () => { win = null; });
  win.loadURL(winURL);
  win.show();
  win.setAlwaysOnTop(true, 'status');
}

app.on('ready', createFramelessWindow)

function toggleWidget() {
  if(win) {
    win.isVisible() ? win.hide() : win.showInactive()
  } else {
    createFramelessWindow()
  }
}

export {
  toggleWidget
}