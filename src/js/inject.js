// Check storage and load theme in storage


function loadCurrentTheme() {
  
  chrome.storage.local.get('currentTheme').then(function (data) {
    if ("currentTheme" in data) {
      document.body.classList.add(data.currentTheme)
    }
  })
}


chrome.runtime.onMessage.addListener(function (request) {
  
  if (Object.keys(request)[0] == 'SnowThemeMessage') {
    
    var classList = document.body.className.split(' ')

    for (let index = 0; index < classList.length; index++) {
      const NameClass = classList[index];
      
      if (NameClass.includes('SnowTheme:')) {
        classList.splice(index, 1)
        document.body.className = classList.join(' ') + ` ${request.SnowThemeMessage}`; // add class with new value
        chrome.storage.local.set({'currentTheme': request.SnowThemeMessage})
      }
    }
    document.body.className = classList.join(' ') + ` ${request.SnowThemeMessage}`;

  }
}
);

loadCurrentTheme()