var React = require('react');
var openWeatherMap = require('openWeatherMap');

var WeatherForm = React.createClass({
   onFormSubmit: function (e) {
      e.preventDefault();

      var location = this.refs.location.value;

      if (location.length > 0) {
         this.refs.location.value = '';
         this.props.onSearch(location);
      }
   },
   render: function () {
      return (
         <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="location" placeholder="Enter City" />
            <button>Get Weather</button>
         </form>
      )
   }
});

var WeatherMessage = function (props) {
   return (
      <p>the location is {props.location} and temp is {props.temp}</p>
   )
};


var Weather = React.createClass({
   getInitialState: function () {
      return {
         isLoading: false
      }
   },
   handleSearch: function (location) {
      var that = this;

      this.setState({ isLoading: true });
      openWeatherMap.getTemp(location).then(function (temp) {
         that.setState({
            location: location,
            temp: temp,
            isLoading: false
         })
      }, function (errorMessage) {
         that.setState({ isLoading: false })
         alert(errorMessage)
      })
   },
   render: function () {
      var { isLoading, temp, location } = this.state;
      function renderMessage() {
         if (isLoading) {
            return <h3>Fetching Weather....</h3>
         } else if (temp && location) {
            return <WeatherMessage location={location} temp={temp} />
         }
      }
      return (
         <div>
            <p>Hello from Weather</p>
            <WeatherForm onSearch={this.handleSearch} />
            {renderMessage()}
         </div>
      )
   }
})

module.exports = Weather