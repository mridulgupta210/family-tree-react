import React from 'react';
import Pair from './pair';

const Level = props => {
    return (
        <>
            <div className="level">
                {props.level.map(pair => (<Pair pair={pair} levelNumber={props.levelNumber} />))}
            </div>
            <div class="level-connector"></div>
        </>
    );
}

export default Level;
