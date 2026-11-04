const { app, BrowserWindow } = require('electron');
const path = require('path');

const startUrl = process.env.APP_URL || 'http://localhost:5173';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    backgroundColor: '#121826',
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  if (app.isPackaged) {
    const buildPath = path.join(__dirname, 'dist', 'index.html');
    mainWindow.loadFile(buildPath).catch(() => {
      mainWindow.loadURL(startUrl);
    });
  } else {
    mainWindow.loadURL(startUrl);
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
