chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, { file: "jquery-1.12.0.min.js" }, function() {
	    chrome.tabs.executeScript(tab.id, { file: "dnButton.js" });
	});
});