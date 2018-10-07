import Game from './backend/Game.js';
import BattleOfACI from './frontend/components/BattleOfACI.js';
import React from 'react';
import './main.css';

class Session extends React.Component {
    constructor(props) {
        super(props);
        this.game = new Game(['P1', 'P2', 'P3', 'P4']);
        this.onAction = this.onAction.bind(this);
        this.state = {
            players: this.game.players,
            turn: this.game.goesFirst,
        }
    }

    onAction(player, action, type, attackValue, swapCardType, swapCardAttackValue) {
        this.game.action(player, action, type, attackValue, swapCardType, swapCardAttackValue);
        this.setState(() => ({players: this.game.players, turn: this.game.battle.playerToAct || this.game.goesFirst}));
    }

    render() {
        return (
            <div>
                <BattleOfACI
                    players={this.state.players}
                    onAction={this.onAction}
                    turn={this.state.turn}
                />
            </div>
        );
    }
}

export default Session