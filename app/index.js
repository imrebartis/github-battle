var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

require('./index.css');

// state (not always needed)
// lifecycle event (not always needed)
// UI (see component definition, almost always needed)

//component definition
class Users extends React.Component {
  render() {

     var friends = this.props.list.filter(function (user) {
              return user.friend === true;
            });

    var nonFriends = this.props.list.filter(function (user) {
              return user.friend !== true;
            });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {/*Create an <li> for every name in the list array who is also your friend*/
            friends.map(function (user){
              // key is added so that each item could have a unique identifier
              return <li key={user.name}>{user.name}</li>
            })}
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {/*Create an <li> for every name in the list array who is NOT your friend*/
               nonFriends.map(function (user){
              return <li key={user.name}>{user.name}</li>
            })}
        </ul>        
      </div>
    )
  }
}

Users.PropTypes = {
  // specifiying that list should be an array of objects:  
  // list: PropTypes.arrayOf(PropTypes.object).isRequired
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);