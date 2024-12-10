function updateTime() {
    const timeZones = {
        "America/New_York": "New York",
        "Europe/London": "London",
        "Asia/Tokyo": "Tokyo",
        "Australia/Sydney": "Sydney",
        "America/Chicago": "Lufkin",  // "America/Dallas" is not a valid timezone, it should be "America/Chicago".
        "Asia/Hong_Kong": "Hong Kong" // The correct timezone is "Asia/Hong_Kong", not "China/Hong_Kong".
    };

    for (let zone in timeZones) {
        const time = new Date().toLocaleString("en-US", { timeZone: zone });
        const clockDiv = document.getElementById(zone.split('/')[1].toLowerCase().replace('_', '-'));
        if (clockDiv) {
            clockDiv.innerHTML = `<h2>${timeZones[zone]}</h2>${time}`;
        }
    }
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime();

