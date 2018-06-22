import { app, BrowserWindow } from "electron";

let win: BrowserWindow | null;

const createWindow = (): void => {
  win = new BrowserWindow({ width: 1024, height: 768 });

  win.loadFile("index.html");

  win.on("closed", () => {
    win = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
