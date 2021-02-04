console.log("log");
const fetch = require('node-fetch');

fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.4&lon=24.7')
    .then(response => response.json())
    .then(data => {​​​​​
        console.log(data.properties.timeseries[0].time);
        console.log(data.properties.timeseries[0].data.instant.details.air_temperature + "°C");
    }​​​​​);