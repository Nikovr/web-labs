function loadPic() {
    return new Promise((resolve, reject) => {
        var id = Math.floor(Math.random() * 5000) + 1;
        var request = 'https://jsonplaceholder.typicode.com/photos/' + id;
        fetch(request).then(response => response.json())
        .then((json) => {
            let preloader = document.getElementById('preloader');
            preloader.src = json.url
        })
        .catch((exception) => {
            console.log(exception)
            let preloader = document.getElementById('preloader');
            preloader.src = "photos/cat-explosion.gif";
        });
    })
}

