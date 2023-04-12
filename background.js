chrome.contextMenus.create({
    id: 'dogearContextMenu',
    title: 'Save Selected text as DogEar',
    contexts: ['selection'] // Only show the context menu when text is selected
});

chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId == 'dogearContextMenu') {
        // Get the selected text
        var selectedText = info.selectionText;

        // Do something with the selected text
        console.log('Saved passage: ', selectedText);
        
    }
});