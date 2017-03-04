var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');

var Main = React.createClass({
   render: function () {
      return (
         <div>
            <Nav />
            <h2>Main Component</h2>
            {this.props.children}
         </div>
      )
   }
})

module.exports = Main;