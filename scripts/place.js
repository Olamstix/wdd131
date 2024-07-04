document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');
    const temperature = parseFloat(document.getElementById('temperature').innerText);
    const windSpeed = parseFloat(document.getElementById('wind').innerText);
    const windChillSpan = document.getElementById('wind-chill');

    // Set the current year and last modified date
    yearSpan.innerText = new Date().getFullYear();
    lastModifiedSpan.innerText = document.lastModified;

    // Calculate and display the wind chill factor
    function calculateWindChill(temp, wind) {
        return (temp <= 10 && wind > 4.8) ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) : 'N/A';
    }

    windChillSpan.innerText = calculateWindChill(temperature, windSpeed);
});
