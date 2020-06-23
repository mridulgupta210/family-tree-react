import React from 'react';
import Pair from './pair';

const Level = props => {
    return (
        <>
            <div className="level">
                {props.level.map(pair => (<Pair pair={pair} levelNumber={props.levelNumber} />))}
            </div>
            {props.levelNumber !== 3 && props.nextLevelCount > 1 &&
                <div
                    className="level-connector"
                    style={{
                        width: (props.nextLevelCount / 2) * // nodes on the next level
                        260
                    }}
                >
                </div>}
        </>
    );
}

export default Level;
