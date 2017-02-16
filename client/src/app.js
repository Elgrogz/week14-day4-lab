var React = require('react');
var ReactDOM = require('react-dom');
var GameContainer = require('./containers/GameContainer.jsx');

window.onload = function(){
  ReactDOM.render(
    <GameContainer />,
    document.getElementById('app')
  );
}
