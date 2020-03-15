const path = require("path");
const url = require("url");

const customTitlebar = require("custom-electron-titlebar");

window.addEventListener('DOMContentLoaded', () => {
    let TitleBar = new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex("#2A2D34"),
        menu: null,
        titleHorizontalAlignment: "left",
        //shadow: true
    });

    TitleBar.updateTitle(' ');
});
