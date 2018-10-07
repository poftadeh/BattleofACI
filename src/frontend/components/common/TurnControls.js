import React from 'react';
import PassButton from './PassButton'

class TurnControls extends React.Component {
    render() {
        return (
            <div className="turn-controls">
                <div>{'<<<'}</div>
                <PassButton />
                <div>>>></div>
            </div>
        );
    }
}

export default TurnControls;