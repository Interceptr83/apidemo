var url = "https://earthquake.usgs.gov/fdsnws/event/1/application.json?GeoJSON";
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (err) {
                 console.log('error: ' + err);
             });
             console.log(url);