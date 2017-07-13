import { app, ipcMain as ipc } from 'electron'

import {
  toggleWidget
} from './widget'

ipc.on('toggle-widget', toggleWidget)