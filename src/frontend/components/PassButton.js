const React = require('react');

class PassButton extends React.Component {
    constructor(props) {
        super(props);
        this.onPass = this.onPass.bind(this);
    }
    
    onPass() {
        this.props.onAction(this.props.player, 'pass');
    }

    render() {
        return(
            <div>
                <button onClick={this.onPass}>Pass</button>
            </div>
        );
    }
}

module.exports = PassButton;