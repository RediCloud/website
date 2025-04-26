const metricsUrl = "https://api.redicloud.dev/v2/metrics/master/"

function setConnectedNodes(value) {
    for (let elementsByClassNameElement of document.getElementsByClassName("metrics-connected-nodes")) {
        elementsByClassNameElement.innerHTML = value;
    }
}
function setRegisteredNodes(value) {
    for (let elementsByClassNameElement of document.getElementsByClassName("metrics-registered-nodes")) {
        elementsByClassNameElement.innerHTML = value;
    }
}

function contentOfUrl(url) {
    let hxr = new XMLHttpRequest();
    hxr.open("GET", url);
    hxr.send();
    return hxr;
}

function updateMetrics() {
    const connected = contentOfUrl(metricsUrl + "nodes/online")
    connected.onload = () => setConnectedNodes(connected.responseText);
    const registered = contentOfUrl(metricsUrl + "nodes/registered")
    registered.onload = () => setRegisteredNodes(registered.responseText);
    setTimeout(updateMetrics, 5000);
}
updateMetrics();