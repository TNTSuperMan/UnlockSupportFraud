document.addEventListener("keydown",e=>{"`"==e.key&&e.ctrlKey&&e.altKey&&e.shiftKey&&!e.repeat&&chrome.runtime.sendMessage({})})