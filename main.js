const { app, BrowserWindow } = require('electron')
const path = require('path')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'assets/icons/logo.png')
  })

  win.loadFile(path.join(__dirname, 'pages/index.html'))

  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})