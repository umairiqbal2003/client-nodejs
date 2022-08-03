function getWeather() {

    let cityName = document.querySelector("#cityName").value

    axios.get(`https://weatherapp-onlineumair.herokuapp.com/weather`)
        .then(function (response) {

            let weatherData = response.data



            document.querySelector("#countData").innerHTML = `City:'${weatherData.city}'`
            document.querySelector("#cityTemp").innerHTML = `Temperature:  ${weatherData.temperature}&#8451;`
            document.querySelector("#cityCondition").innerHTML = `Area Condition:  ${weatherData.condition}`
            document.querySelector("#cityDate").innerHTML = `Date and Time:    ${weatherData.localtime}`
            document.querySelector("#regionData").innerHTML = `Country: ${weatherData.country}`
            document.querySelector("#cityData").innerHTML = `Developed:   ${weatherData.developer}`



            console.log(weatherData);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })


}