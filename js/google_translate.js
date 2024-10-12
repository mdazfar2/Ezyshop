let retryCount = 0;
const maxRetries = 50; // Adjust as needed

function googleTranslateInit() {
    if (!window.google?.translate?.TranslateElement) {
        if (retryCount < maxRetries) {
            retryCount++;
            setTimeout(googleTranslateInit, 100);
        } else {
            console.error('Failed to initialize Google Translate after maximum retries.');
        }
    } else {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,hi,pa,sa,mr,ur,bn,es,ja,ko,zh-CN,nl,fr,de,it,ta,te',
            layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
            defaultLanguage: 'en',
            autoDisplay: false,
        }, 'google_element');
    }
}

function loadGoogleTranslateScript() {
    if (!document.getElementById("google_translate_script")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.id = "google_translate_script";
        script.onerror = () => console.error('Error loading Google Translate script');
        document.body.appendChild(script);
    }
}

loadGoogleTranslateScript();

if (window.google?.translate) {
    googleTranslateInit();
}
