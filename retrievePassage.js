chrome.storage.local.get(["passage"]).then((result) => {
    document.getElementById("DogEarPassage").innerHTML = result.passage;
});