const React = require('react');

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.onAction = this.onAction.bind(this);
    }

    onAction(e) {
        this.props.onAction();
    }

    render() {

        return (
            <div 
                className="card"
                onClick={this.onAction}
            >
                {`[${this.props.type}, ${this.props.attackValue}]`}
            </div>
        );
    }
}

module.exports = Card;