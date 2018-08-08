const Game = require('./src/entity/Game.js')
const React = require('react')
const ReactDOM = require('react-dom')




class BattleOfACI extends React.Component {
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.newGame = new Game(['P1', 'P2']);
        this.state = {
            players: this.newGame.players
        }
    }

    show() {
        this.newGame.dealer.dealCardsToAllPlayers(this.newGame.players, 1);
        //this.setState(() => ({ players: this.newGame.players }))
    }

    foo() {
        return (
            this.newGame.players.map((player, index) => {
                return (
                    <p key={index}>
                        {player.hand.cards.map((card, index) => {
                            return (
                                <span key={index}>
                                    {card.type + card.attackValue + ', '}
                                </span>
                            );
                        })}
                    </p>
                );
            })
        )
    }

    render() {
        return (
            <div>
                <h1>test</h1>
                {this.foo()}
                <button onClick={this.show}>asdd</button>
            </div>
        );
    }
}

ReactDOM.render(<BattleOfACI />, document.getElementById('app'))