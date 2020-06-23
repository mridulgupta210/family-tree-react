import React from 'react';
import Node from './node';

const Pair = props => {
    const firstNode = props.pair.find(x => x && x.gender === 'Male');
    const secondNode = props.pair.find(x => x && x.gender === 'Female');

    return (
        <div className="pair-group">
            {props.levelNumber !== 0 && <div className="pair-connector" />}
            <div className="pair">
                <Node element={firstNode} />
                <Node element={secondNode} />
            </div>
            {props.levelNumber !== 3 && <div className="pair-connector" />}
        </div>
    );
}

export default Pair;
