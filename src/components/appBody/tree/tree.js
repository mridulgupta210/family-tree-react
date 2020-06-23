import React from 'react';
import Level from './level';
import { getDataById } from '../../../utilities/mockApi';

const Tree = () => {
    const data = getDataById();
    console.log(data);
    
    return (
        <div className="tree-container">
            {data.map((level, index) => (<Level level={level} levelNumber={index} />))}
        </div>
    );
}

export default Tree;
