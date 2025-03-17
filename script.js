document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = tabs[0].url;
        const status = document.getElementById('status');

        if (/phishing|malware|free-gift|claim-now|\.xyz|\.ru/gi.test(url)) {
            status.innerText = "⚠️ Potential Phishing Detected!";
            status.className = "warning";
        } else {
            status.innerText = "✅ Site looks safe";
            status.className = "safe";
        }
    });

    document.getElementById('refresh').addEventListener('click', () => {
        window.location.reload();
    });
});
