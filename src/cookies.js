// Inicjalizacja Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Pobierz identyfikator Google Analytics lub użyj wartości domyślnej
const analyticsId = 'G-9FZN7890RP';

// Dodaj dynamicznie skrypt do strony z identyfikatorem Google Analytics
const scriptElement = document.createElement('script');
scriptElement.src = `https://www.googletagmanager.com/gtag/js?id=G-9FZN7890RP`;
scriptElement.async = true;

// Obsługa zdarzenia załadowania skryptu
scriptElement.onload = function () {
    // Inicjalizacja Google Analytics po załadowaniu skryptu
    gtag('js', new Date());
    gtag('config', analyticsId);
};

document.head.appendChild(scriptElement);

// Funkcja do sprawdzania stanu plików cookies
function checkCookiesAccepted() {
    return localStorage.getItem('cookiesAccepted') === 'true';
}

// Sprawdzanie, czy Google Analytics zostało wyłączone przez użytkownika
function isAnalyticsDisabled() {
    return localStorage.getItem('analyticsDisabled') === 'true';
}

// Sprawdź stan plików cookies przy załadowaniu strony
if (checkCookiesAccepted() && !isAnalyticsDisabled()) {
    // Uruchom Google Analytics tylko jeśli użytkownik zaakceptował pliki cookie i nie wyłączył śledzenia
    gtag('js', new Date());
    gtag('config', analyticsId);
}

// Funkcja do akceptowania plików cookies
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsDisabled', 'false');
    checkCookiesAccepted(); // Sprawdź stan po zaakceptowaniu cookies
    closeCookieContainer(); // Zamknij okno informacyjne po zaakceptowaniu cookies
}

// Funkcja do wyłączania Google Analytics
function disableAnalytics() {
    localStorage.setItem('analyticsDisabled', 'true');
    localStorage.setItem('cookiesAccepted', 'false');
    checkCookiesAccepted(); // Sprawdź stan po wyłączeniu cookies
    closeCookieContainer(); // Zamknij okno informacyjne po wyłączeniu cookies
}

// Funkcja do zamykania okna informacyjnego
function closeCookieContainer() {
    document.getElementById('cookie-container').style.display = 'none';
}
