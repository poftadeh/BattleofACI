import React from 'react';

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
        return (
            <div
                onClick={this.props.type === "scarecrow" ? this.enableScarecrowSelected : this.onAction}
            >
                <div className={`card hand-card ${this.props.type}`}>
                    <span className="attack-value">
                        {!!this.props.attackValue && this.props.attackValue}
                    </span>
                </div>
            </div>
        );
    }
}

export default HandCard;