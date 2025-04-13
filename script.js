function getDeviceInfo() {
    // Browser Information Here...
    const userAgent = navigator.userAgent;
    let browser = "Unknown Browser";
    if (userAgent.indexOf("Chrome") > -1) {
        browser = "Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        browser = "Firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
        browser = "Safari";
    } else if (userAgent.indexOf("Edge") > -1) {
        browser = "Edge";
    }

    // OS Information Here...
    const os = navigator.platform;

    // Device Type
    const deviceType = /Mobi|Android/i.test(userAgent) ? "Mobile" : "Desktop";

    // Screen Resolution
    const screenResolution = `${window.screen.width} x ${window.screen.height}`;

    // Connection Type
    let connectionType = "Unknown";
    if (navigator.connection) {
      connectionType = navigator.connection.effectiveType;
    }

    // Device Memory
    const deviceMemory = navigator.deviceMemory || "Unknow";

    // Battery Status
    let batteryStatus = "Not Available";
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery){
            batteryStatus = `Level: ${battery.level * 100}% | Charging: ${battery.charging}`;
            document.getElementById("battery-status").innerText = batteryStatus;
        });
    }

    // Update the HTML elements with the gathered Information
    document.getElementById("browser").innerText = browser;
    document.getElementById("os").innerText = os;
    document.getElementById("device-type").innerText = deviceType;
    document.getElementById("screen-resolution").innerText = screenResolution;
    document.getElementById("connection-type").innerText = connectionType;
    document.getElementById("device-memory").innerText = deviceMemory;

}
window.onload = getDeviceInfo;