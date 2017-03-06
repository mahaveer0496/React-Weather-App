var React = require('react');

var About = function () {
   return (
      <div>
         <h1 className="text-center">About</h1>
         <p>this is a weather app</p>
         <p>Some tools i used</p>
         <ul>
            <li>
               <a href="https://facebook.github.io/react">React</a> - This is the JS framework used
            </li>
            <li>
               <a href="http://openweathermap.org">Open Weather Map</a> - API used to search for weather
            </li>
         </ul>

      </div>
   )
}

module.exports = About; 