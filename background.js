chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({currentWindow: true}, tabs => {
    tabs.map((currentTab, i) => {
      tabs.slice(i).map(tab => {
        if (currentTab.id === tab.id) {
          return;
        }

        if (currentTab.url === tab.url) {
          chrome.tabs.sendMessage(tab.id, 'same tab')
          .then((response) => {
            if (response) {
              chrome.tabs.remove(tab.id);
            }
          }).catch((error) => {
            console.log(error);
          })
          return true;
        }
      });
    });
  });
});