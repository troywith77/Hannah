const { app, session } = require('electron')

// Query all cookies.
app.on('ready', () => {
  session.defaultSession.cookies.get({}, (error, cookies) => {
    // console.log(error, cookies)
  })
})