import React from 'react';

const Pair = props => {
    const firstNode = props.pair.find(x => x.gender === 'Male');
    const secondNode = props.pair.find(x => x.gender === 'Female');

    return (
        <div class="pair-group">
            {props.levelNumber !== 0 && <div class="pair-connector"></div>}
            <div class="pair">
                <div class="node">{firstNode.name.first}</div>
                <div class="node">{secondNode ? secondNode.name.first : 'Placeholder'}</div>
            </div>
            <div class="pair-connector"></div>
        </div>
    );
}

export default Pair;
