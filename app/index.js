var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state (not always needed)
// lifecycle event (not always needed)
// UI (see component definition, almost always needed)

//component definition
class App extends React.Component {
  render() {
    return (
      <div>Hello youhoohoo!</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);