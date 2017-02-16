import React from 'react';

class Tile extends React.Component {

  constructor(props) {
    super(props); 
  }

  handleClickEvent() {
    this.props.click(this.props.number);
  }

  render() {
    return (
        <td className="Tile" onClick={this.handleClickEvent.bind(this)}>{this.props.contents}</td>
      )
  }
}

module.exports = Tile;