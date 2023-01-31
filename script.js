

// I will create query URL.
var queryUrl = ``;

// I will get responses from the Weather API using the endpoint and have it as a json file.
function getWeatherForecast(lat, lon, callback) {
    const queryUrl = ``;

    fetch(queryUrl)
    .then(response => response.json())
    .then(callback)
    .catch(console.log);
}

// I will write the following functions to control what I get from the API
    // A function that will show an object under the webpage
    // A function that will show all the fields (Temperature, Wind, and Humidity). 
    // A function that will show the weather forecast for today.
    // A function that will show both todays forecast and that of all the 5 Days

// I will create an event handler my search button 