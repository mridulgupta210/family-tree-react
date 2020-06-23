import React from 'react';

const Pair = props => {
    const firstNode = props.pair.find(x => x && x.gender === 'Male');
    const secondNode = props.pair.find(x => x && x.gender === 'Female');

    return (
        <div className="pair-group">
            {props.levelNumber !== 0 && <div className="pair-connector"></div>}
            <div className="pair">
                <div className="node">{firstNode ? firstNode.name.first : 'placeholder'}</div>
                <div className="node">{secondNode ? secondNode.name.first : 'Placeholder'}</div>
            </div>
            {props.levelNumber !== 3 && <div className="pair-connector"></div>}
        </div>
    );
}

export default Pair;
