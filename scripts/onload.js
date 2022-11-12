var startTime = new Date().getTime();

window.onload = function() {
    nav();
    calcTime(startTime);
}

function nav() {
    var path = window.location.pathname;
    var page = path.split("/").pop().split(".")[0];
    var el = document.getElementById(page);
    el.className = "nav__elem--active";
}

function calcTime(startTime) {
    var endTime = new Date().getTime();
    var loadTime = endTime - startTime;
    var element = document.getElementById('loadtime');
    element.innerText = `Load Time is ${loadTime.toString()} ms`;
}