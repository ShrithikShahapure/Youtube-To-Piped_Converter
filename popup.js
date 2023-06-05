chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var url = tabs[0].url;
    var videoId = getVideoId(url);
    

  if (videoId) {
    var pipedLink = 'https://piped.kavin.rocks/' + videoId; // Replace 'example.com' with your desired URL

    // Do something with the piped link, e.g., open a new tab with the piped link
    chrome.tabs.create({ url: pipedLink });
  }
});

function getVideoId(url) {
  var videoIdRegex = /[?&]v=([^&#]+)/;
  var match = videoIdRegex.exec(url);

  if (match) {
    return match[1];
  }

  return null;
}





chrome.action.onClicked.addListener(async (tab) => {
  const [tabInfo] = await chrome.tabs.query({ active: true, currentWindow: true });
  const { url } = tabInfo;
  const videoId = getVideoId(url);

  if (videoId) {
    const pipedLink = `https://piped.kavin.rocks/${videoId}`; 

    // Do something with the piped link, e.g., open a new tab with the piped link
    chrome.tabs.create({ url: pipedLink });
  }
});

function getVideoId(url) {
  const videoIdRegex = /[?&]v=([^&#]+)/;
  const match = videoIdRegex.exec(url);

  if (match) {
    return match[1];
  }

  return null;
}

