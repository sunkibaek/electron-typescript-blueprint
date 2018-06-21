"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * electron entry point
 */
var electron_1 = require("electron");
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 1024, height: 768 });
    win.loadFile("index.html");
    win.on("closed", function () {
        win = null;
    });
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (win === null) {
        createWindow();
    }
});
