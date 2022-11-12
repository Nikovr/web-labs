setInterval(function () {
    var el = document.getElementById('header');
    el.style.visibility = (el.style.visibility == 'hidden' ? '' : 'hidden');
}, 500);