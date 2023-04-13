var selectedText = "Dummy text!";
console.log("This is what I think the selected text is: " + chrome.runtime.getURL("index.html"));

var iFrame = document.createElement('iframe');
iFrame.src = chrome.runtime.getURL("index.html");
document.body.insertBefore(iFrame, document.body.firstChild);