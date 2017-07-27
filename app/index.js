var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

require('./index.css');

// state (not always needed)
// lifecycle event (not always needed)
// UI (see component definition, almost always needed)

//component definition


class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: {this.props.name} </h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.username} </h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar img={this.props.user.img}/>
        <Label name={this.props.user.name}/>
        <ScreenName username={this.props.user.username}/>
      </div>
    )
  }
}

Badge.PropTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

ReactDOM.render(
  <Badge user={{
    name: 'Cat Stevens',
    img: 'http://kaboompics.com/cache/4/a/e/9/b/4ae9b5eb5c90b004225674f6aa75fe531458fe8c.jpeg?version=v17',
    username: 'cat'
  }} />,
  document.getElementById('app')
);