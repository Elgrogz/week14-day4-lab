import React from 'react';
import Tile from './Tile.jsx';

class Table extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
      <tbody>
        <tr>
          <Tile contents={this.props.board[0][0]} />
          <Tile contents={this.props.board[0][1]} />
          <Tile contents={this.props.board[0][2]} />
        </tr>
        <tr>
          <Tile contents={this.props.board[1][0]} />
          <Tile contents={this.props.board[1][1]} />
          <Tile contents={this.props.board[1][2]} />
        </tr>
        <tr>
          <Tile contents={this.props.board[2][0]} />
          <Tile contents={this.props.board[2][1]} />
          <Tile contents={this.props.board[2][2]} />
        </tr>
      </tbody>
    </table>
    )
  }

}

module.exports = Table;