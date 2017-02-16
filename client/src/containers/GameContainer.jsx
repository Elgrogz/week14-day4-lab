import React from 'react';
import Table from '../components/Table.jsx'

class GameContainer extends React.Component {

  constructor() {
    super();
    this.players = ["X", "O"];
    this.turn = this.players[0];
    const board = [
                  ["","",""],
                  ["","",""],
                  ["","",""]
                ]

    this.state = {board: board}
  }

  //handleClick function

  render() {
    return (
      <div>
        <Table board={this.state.board} />
      </div>
      )
  }

}

module.exports = GameContainer;