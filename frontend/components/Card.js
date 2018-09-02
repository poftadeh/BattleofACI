const React = require('react');

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.onAction = this.onAction.bind(this);
    }

    onAction(e) {
        console.log(e, e.target);
        this.props.onAction(this.props.player, 'play', this.props.type, this.props.attackValue);
    }

    render() {
        const attackValue = this.props.attackValue > 0 ? `, ${this.props.attackValue}` : "";
        return (
            <div 
                className="card"
                onClick={this.props.onAction && this.onAction}
            >
                {`[${this.props.type}${attackValue}]`}
            </div>
        );
    }
}

module.exports = Card;