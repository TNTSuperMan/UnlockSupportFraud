document.addEventListener("keydown",e=>{
    if(e.key == "`" &&
       e.ctrlKey && e.altKey && e.shiftKey && !e.repeat){
        chrome.runtime.sendMessage({})
    }
})
