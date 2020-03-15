const { app, BrowserWindow } = require('electron')
const path = require("path")
const isDev = require("electron-is-dev")

//const iconPath = /*path.join(__dirname, '/assets/images/logo/JoinHub Logo 100x.svg')*/ "../../assets/images/logo/JoinHub Logo 100x.svg"

let win;

function createWindow () {
    win = new BrowserWindow({
        width: 1920, // TODO: Dit passen we aan naar 1280x720 als we het responsive hebben gemaakt.
        height: 1080,
        frame: false,
        show: true,
        center: true,
        fullscreenable: true,
        resizable: true,
        transparent: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),

            nodeIntegration: true
        }
    })

    win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`)

    //win.webContents.openDevTools()

    
}


app.whenReady().then(createWindow)

app.on('window-all-closed', e => {
    e.preventDefault();
    if (process.platform !== 'darwin') app.quit() 
    win = null
});


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

