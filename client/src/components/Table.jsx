import React from 'react';
import Tile from './Tile.jsx';

class Table extends React.Component {

  constructor(props) {
    super(props);
    const board = ["","","","","","","","",""];

    this.state = {players: ["X", "O"], board: board}
  }

  handleClickEvent(number) {
    var newBoard = [...this.state.board];
    newBoard[number] = this.state.players[0];

    var newPlayers = [...this.state.players];
    newPlayers.unshift(newPlayers.pop());
    this.setState({players: newPlayers, board: newBoard});
  }

  render() {
    return (
      <table className= "Table">
      <tbody>
        <tr>
          <Tile number={0} contents={this.state.board[0]} player={this.state.player} click={this.handleClickEvent.bind(this)}/>
          <Tile number={1} contents={this.state.board[1]} player={this.props.player} click={this.handleClickEvent.bind(this)}/>
          <Tile number={2} contents={this.state.board[2]} player={this.props.player} click={this.handleClickEvent.bind(this)}/>
        </tr>
        <tr>
          <Tile number={3} contents={this.state.board[3]} player={this.props.player} click={this.handleClickEvent.bind(this)}/>
          <Tile number={4} contents={this.state.board[4]} player={this.props.player} click={this.handleClickEvent.bind(this)}/>
          <Tile number={5} contents={this.state.board[5]} player={this.props.player} click={this.handleClickEvent.bind(this)}/>
        </tr>
        <tr>
          <Tile number={6} contents={this.state.board[6]} player={this.props.player} click={this.handleClickEvent.bind(this)}/>
          <Tile number={7} contents={this.state.board[7]} player={this.props.player} click={this.handleClickEvent.bind(this)}/>
          <Tile number={8} contents={this.state.board[8]} player={this.props.player} click={this.handleClickEvent.bind(this)}/>
        </tr>
      </tbody>
    </table>
    )
  }

}

module.exports = Table;