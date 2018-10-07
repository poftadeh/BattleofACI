import React from 'react';
import PassButton from './PassButton'

class TurnControls extends React.Component {
    render() {
        return (
            <div>
                <div>Left</div>
                <PassButton />
                <div>Right</div>
            </div>
        );
    }
}

export default TurnControls;