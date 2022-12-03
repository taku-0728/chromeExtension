chrome.runtime.sendMessage({ name: "pagecheck"})
.then((response) => {
    if (response !== undefined) {
        const res = window.confirm("同じタブを開いているけどそっちでみる？");

        if (res) {
            chrome.runtime.sendMessage({ name: "removeTab", tabID: response['tabID'], currentTabID: response['currentTabID']});
        }
    }
}).catch((error) => {
    console.log(error);
});