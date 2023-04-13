chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: 'dogearContextMenu',
        title: 'Save Selected text as DogEar',
        contexts: ['selection'] // Only show the context menu when text is selected
    });
});

function addMenu() {
    var iFrame = document.createElement('iframe');
    iFrame.src = chrome.runtime.getURL("index.html");
    document.body.insertBefore(iFrame, document.body.firstChild);
}

async function injectMenu() {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });
    // chrome.scripting.executeScript({
    //     target: {tabId: tab.id},
    //     code: 'var selectedText = ' + selectedText + ";"
    // });

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: addMenu
    });
}

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId == 'dogearContextMenu') {
        // Get the selected text
        var selectedText = info.selectionText;

        // Do something with the selected text
        console.log('Saved passage: ', selectedText);
        chrome.storage.local.set({passage: selectedText});
        injectMenu();
    }
});