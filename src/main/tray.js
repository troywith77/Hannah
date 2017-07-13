import { app, Menu, Tray, ipcMain as ipc } from 'electron'
import path from 'path'

import { toggleWidget } from './widget'

let tray = null

app.on('ready', () => {
  tray = new Tray(path.resolve(__static, 'icon.png'))
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '显示/隐藏 控件',
      // accelerator: 'Alt+Command+J',
      checked: true,
      click(menuItem) {
        toggleWidget()
      }
    },
    {
      label: '关闭选股宝', 
      click(menuItem, browserWindow, event) {
        app.quit()
      }
    },
  ])
  tray.setToolTip('选股宝~')
  tray.setContextMenu(contextMenu)
})