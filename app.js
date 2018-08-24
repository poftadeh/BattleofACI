const Game = require('./src/entity/Game.js')
const BattleOfACI = require('./frontend/components/BattleOfACI.js')
const React = require('react')
const ReactDOM = require('react-dom')

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.game = new Game(['P1', 'P2']);
        this.act = this.act.bind(this);
    }

    onAction(player, action, type, attackValue, swapCardType, swapCardAttackValue) {
        this.game.action(player, action, type, attackValue, swapCardType, swapCardAttackValue)
    }

    render() {
        return (
            <div>
                <BattleOfACI
                    players={this.game.players}
                    onAction={this.onAction}
                />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'))