chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  chrome.tabs.query({ active: true, currentWindow: true })
    .then(activeTab => {
      switch (msg.name) {
        case "pagecheck":
          chrome.tabs.query({currentWindow: true}).then(tabs => {
            tabs.forEach(tab => {
              if (activeTab[0].id === tab.id) {
                return;
              }
              if (activeTab[0].url === tab.url) {
                sendResponse({
                  'currentTabID': activeTab[0].id,
                  'tabID': tab.id
                });
                return;
              }
            });
          });
          break;
        case 'removeTab':
          chrome.tabs.remove(msg.currentTabID);
          chrome.tabs.update(msg.tabID,{selected:true});
          break;
    }
    });
  return true;
})
