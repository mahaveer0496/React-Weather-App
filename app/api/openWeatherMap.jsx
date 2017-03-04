var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=54210b7425775c5509e6d309d4e49623&units=imperial';
// 54210b7425775c5509e6d309d4e49623

//http://api.openweathermap.org/data/2.5/weather?appid=54210b7425775c5509e6d309d4e49623&units=imperial

module.exports = {
   getTemp: function (location) {
      var encodedLocation = encodeURIComponent(location)
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function (res) {
         if (res.data.cod && res.data.message) {
            throw new Error(res.data.message)
         } else {
            return res.data.main.temp
         }
      }, function (res) {
         throw new Error(res.data.message);
      })
   }
}