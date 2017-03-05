var React = require('react');
var { Link } = require('react-router');

var Examples = function (props) {
   return (
      <div>
         <h1 className="text-center">Examples</h1>
         <p>Here is an example to try out</p>
         <ol>
            <li>
               <Link to="/?location=delhi">Delhi, India</Link>
            </li>
            <li>
               <Link to="/?location=haryana">haryana</Link>
            </li>
         </ol>
      </div>
   )
}

module.exports = Examples;