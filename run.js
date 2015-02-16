chrome.browserAction.onClicked.addListener(function(tab){
    //toggle(tab);
    chrome.tabs.executeScript(null, {file: "jquery-1.11.0.min.js"});
    chrome.tabs.executeScript(null, {file: "script.js"});
});
