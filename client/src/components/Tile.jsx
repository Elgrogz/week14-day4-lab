import React from 'react';

class Tile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <td>{this.props.contents}</td>
      )
  }
}

module.exports = Tile;