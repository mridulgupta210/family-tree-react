import React, { useState } from 'react';

const Node = props => {
    const [test, setTest] = useState(1);

    const person = props.element;
    return (
        <div className="node">
            {person ? person.name.first :
                <button onClick={() => setTest(test + 1)}>Add</button>
            }
        </div>
    );
}

export default Node;
