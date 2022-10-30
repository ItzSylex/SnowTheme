// Check storage and load theme in storage


function loadCurrentTheme() {

  chrome.storage.local.get(['currentTheme']).then(function (data) {
    if (data.currentTheme in localStorage) {
      document.getElementsByTagName('body').classList.add(data.currentTheme)
    }
  })
}


chrome.runtime.onMessage.addListener(function (request) {

  if (Object.keys(request)[0] == 'SnowThemeMessage') {
    console.log(request.SnowThemeMessage)

    var classList = document.getElementsByTagName('body').split(' ')

    if ('SnowTheme:' in classList) {
      var newClass = classList.splice(classList.indexOf('SnowTheme'), 1) // remove current class
      document.getElementsByTagName('body').className = newClass + ` ${request.SnowThemeMessage}`; // add class with new value

      // need to overwrite current value in local storage
    

    }
  }
}
);
