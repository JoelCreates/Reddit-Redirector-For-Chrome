chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("https://www.reddit.com") && !changeInfo.url.includes("new.reddit.com")) {
      chrome.tabs.update(tabId, {url: changeInfo.url.replace("www.reddit.com", "new.reddit.com")});
    }
  });
  
  