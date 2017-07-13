import { app, dialog, ipcMain as ipc } from 'electron'

ipc.on('open-information-dialog', function(e) {
  const options = {
    type: 'info',
    title: 'Information',
    message: 'This is an information dialog, watch out.',
    buttons: ['Yes', 'No']
  }
  dialog.showMessageBox(options, function(index) {
    e.sender.send('information-dialog-selection', index)
  })
})