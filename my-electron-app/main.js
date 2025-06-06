const { app, BrowserWindow } = require("electron");

/**
 * fonction to create a BrowserWindow.
 * */
const createWindows = () => {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile("index.html");
};

/* create the window when the app is ready */
app.whenReady().then(() => {
  // create the windows
  createWindows();

  /* Close the app on Windows and Linux but not in macOS(darwin) case */
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });

  /* load the window when all windows are closed but the app 
    is still running (it is the cas in macOS) 
  */
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindows();
  });
});
