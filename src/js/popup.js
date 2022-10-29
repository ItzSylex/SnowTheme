document.getElementById('dropdown-content').addEventListener('click', (event) => {
    
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
        
        for (tab of tabs){

            if (tab.url.includes("app.snowflake.com")) {
                chrome.tabs.sendMessage(tab.id, event.target.id)
            }
        }
    });
});