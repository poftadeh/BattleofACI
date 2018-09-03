const React = require('react');

class BattleLineCard extends React.Component {
    constructor(props) {
        super(props);
        this.playSwapCard = this.playSwapCard.bind(this);
    }
    
    playSwapCard() {
        this.props.toggleScarecrowSelected(false);
        this.props.onAction(this.props.player, 'play', 'scarecrow', 0, this.props.type, this.props.attackValue);
    }

    render() {
        const attackValue = this.props.attackValue > 0 ? `, ${this.props.attackValue}` : "";
        return (
            <div 
                className="card"
                onClick={(this.props.scarecrowSelected && this.props.type === "mercenary") ? this.playSwapCard : undefined}
            >
                {`[${this.props.type}${attackValue}]`}
            </div>
        );
    }
}

module.exports = BattleLineCard;