chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.name) {
      case "pagecheck":
        chrome.tabs.query({currentWindow: true}, tabs => {
          tabs.map((currentTab, i) => {
            tabs.slice(i).map(tab => {
              if (currentTab.id === tab.id) {
                return;
              }
      
              if (currentTab.url === tab.url) {
                sendResponse({
                  'currentTabID': currentTab.id,
                  'tabID': tab.id
                });
                return;
              }
            });
          });
        });
        break;
      case 'removeTab':
        chrome.tabs.remove(msg.tabID);
        chrome.tabs.update(msg.currentTabID,{selected:true});
        break;
  }
  
  return true;
})
