document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = tabs[0].url;
        const status = document.getElementById('status');

        if (/free-gift|win-prize|claim-now/gi.test(url)) {
            status.innerText = "⚠️ Potential Phishing Detected!";
            status.style.color = "red";
        } else {
            status.innerText = "✅ Site looks safe";
            status.style.color = "green";
        }
    });
});
