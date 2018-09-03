const React = require('react');

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.onAction = this.onAction.bind(this);
        this.setSwapCard = this.playSwapCard.bind(this);
        this.enableScarecrowSelected = this.enableScarecrowSelected.bind(this);
        this.playSwapCard = this.playSwapCard.bind(this);
    }
    
    playSwapCard() {
        this.props.onAction(this.props.player, 'play', 'scarecrow', 0, this.props.type, this.props.attackValue);
        this.props.toggleScarecrowSelected(false);
    }

    onAction(e) {
        console.log(e, e.target);
        this.props.onAction(this.props.player, 'play', this.props.type, this.props.attackValue);
        this.props.toggleScarecrowSelected(false);
    }

    enableScarecrowSelected() {
        this.props.toggleScarecrowSelected(true);
    }

    getClickAction() {
        if (this.props.scarecrowSelected && this.props.type === "mercenary") {
            return this.playSwapCard;
        } else if (this.props.type === "scarecrow") {
            return this.enableScarecrowSelected;
        } else {
            return this.onAction;
        }
    }

    render() {
        const attackValue = this.props.attackValue > 0 ? `, ${this.props.attackValue}` : "";
        const clickAction = this.getClickAction();
        return (
            <div 
                className="card"
                onClick={clickAction}
            >
                {`[${this.props.type}${attackValue}]`}
            </div>
        );
    }
}

module.exports = Card;