const {app, BrowserWindow, Menu, Tray} = require('electron')
const path = require('path')
const url = require('url')

let win
let tray = null

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  setTimeout(closeWindow, 5000)
}

app.on('ready', startWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  tray = new Tray('./Phone-icon.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'}
  ])
  tray.setContextMenu(contextMenu)
  updateToolTip()
  setInterval(updateToolTip, 1000)
})

function updateToolTip () {
  tray.setToolTip('Running application')
}

function startWindow () {
  setTimeout(createWindow, 20000)
}

function closeWindow () {
  win.close()
  win = null
  app.hide()
  updateToolTip()
  startWindow()
}
