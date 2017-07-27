var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state (not always needed)
// lifecycle event (not always needed)
// UI (see component definition, almost always needed)

//component definition
class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(user){
            return <li> {user} </li>;
          })}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);
