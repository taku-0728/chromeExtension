chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request !== 'same tab') return
    sendResponse(window.confirm("同じタブを開いているけどそっちでみる？"));
})