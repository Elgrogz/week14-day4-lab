var React = require('react');
var ReactDOM = require('react-dom');
var Table = require('./components/Table.jsx');

window.onload = function(){
  ReactDOM.render(
    <Table />,
    document.getElementById('app')
  );
}
