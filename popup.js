document.addEventListener('DOMContentLoaded', function() {
    var extractButton = document.getElementById('extractButton');
    var titleDisplay = document.getElementById('titleDisplay');
  
    extractButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentTab = tabs[0];
        var tabTitle = currentTab.title;
        titleDisplay.innerText = "Title of Current Tab: " + tabTitle;
       
      });
    });
  });
  