chrome.runtime.onMessage.addListener(async r=>{
    chrome.tabs.remove((await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }))[0].id)
})