import { app, Menu, Tray, ipcMain as ipc } from 'electron'
import path from 'path'

import { toggle } from './widget'

let tray = null

app.on('ready', () => {
  tray = new Tray(path.resolve(__static, 'icon.png'))
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '显示控件',
      type: 'checkbox',
      checked: true,
      click(menuItem) {
        toggle()
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