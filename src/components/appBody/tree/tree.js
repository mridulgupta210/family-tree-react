import React from 'react';
import Level from './level';
import { getDataById } from '../../../utilities/mockApi';

const Tree = () => {
    const data = getDataById(5);
    console.log(data);

    return (
        <div className="tree-container">
            {data.map((level, index) => (
                <Level
                    key={index}
                    level={level}
                    levelNumber={index}
                    nextLevelCount={index < 3 ? data[index + 1].length : 0}
                />
            ))}
        </div>
    );
}

export default Tree;
