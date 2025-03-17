console.log("Content script loaded");

const knownPhishingPatterns = [
    /phishing/gi, 
    /malware/gi,
    /free-gift/gi,
    /claim-now/gi
];

const checkForPhishing = () => {
    console.log(`Checking URL: ${window.location.href}`);
    let isPhishing = false;

    // Check for suspicious URL patterns
    knownPhishingPatterns.forEach(pattern => {
        if (pattern.test(window.location.href)) {
            console.log(`Matched pattern: ${pattern}`);
            isPhishing = true;
        }
    });

    // Check for suspicious form inputs
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        if (form.innerHTML.toLowerCase().includes('password')) {
            console.log("Form contains password input");
            isPhishing = true;
        }
    });

    if (isPhishing) {
        alert("⚠️ This site may be a phishing attempt!");
    } else {
        console.log("Site seems safe");
    }
};

checkForPhishing();
