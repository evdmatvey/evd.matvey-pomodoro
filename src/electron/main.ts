import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 500,
    width: 400,
    autoHideMenuBar: true,
    icon: '../images/icon.png',
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.setMenu(null);

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light';
    } else {
      nativeTheme.themeSource = 'dark';
    }
    return nativeTheme.shouldUseDarkColors;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
