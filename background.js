chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: 'dogearContextMenu',
        title: 'Save Selected text as DogEar',
        contexts: ['selection'] // Only show the context menu when text is selected
    });
});

async function injectMenu(selectedText) {
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
        files:["savemenu.js"],
    });
}

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId == 'dogearContextMenu') {
        // Get the selected text
        var selectedText = info.selectionText;

        // Do something with the selected text
        console.log('Saved passage: ', selectedText);
        injectMenu(selectedText);
        
    }
});