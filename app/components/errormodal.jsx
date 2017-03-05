var React = require('react');

var ErrorModal = React.createClass({
   componentDidMount: function () {
      var modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
   },
   render: function () {
      return (
         <div id="erro-modal" className="reveal tiny text-center" data-reveal>
            <h4>Some Titles</h4>
            <p>Our Error Mesage</p>
            <p>
               <button className="button hollow" data-close>Okay</button>
            </p>
         </div>
      )
   }
});

modules.exports = ErrorModal;