document.addEventListener('DOMContentLoaded', function() {
    function showScreen(screenId) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.style.display = 'none');
        const selectedScreen = document.getElementById(screenId);
        if (selectedScreen) selectedScreen.style.display = 'block';
    }

    // Example of other functions
    function trackFlight(flight) {
        alert('Tracking ' + flight);
    }

    function getDirections() {
        alert('Getting directions...');
    }

    // Make functions globally available
    window.showScreen = showScreen;
    window.trackFlight = trackFlight;
    window.getDirections = getDirections;
});