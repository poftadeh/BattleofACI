const React = require('react');

class HandCard extends React.Component {
    constructor(props) {
        super(props);
        this.onAction = this.onAction.bind(this);
        this.enableScarecrowSelected = this.enableScarecrowSelected.bind(this);
    }   

    onAction(e) {
        console.log(e, e.target);
        this.props.toggleScarecrowSelected(false);
        this.props.onAction(this.props.player, 'play', this.props.type, this.props.attackValue);
    }

    enableScarecrowSelected() {
        this.props.toggleScarecrowSelected(true);
    }

    render() {
        const attackValue = this.props.attackValue > 0 ? `, ${this.props.attackValue}` : "";
        return (
            <div 
                className={`hand-card ${this.props.type}`}
                onClick={this.props.type === "scarecrow" ? this.enableScarecrowSelected : this.onAction}
            >
                {/* {`[${this.props.type}${attackValue}]`} */}
            </div>
        );
    }
}

module.exports = HandCard;