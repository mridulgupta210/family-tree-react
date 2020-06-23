import React, { useState, useEffect } from 'react';
import './App.css';
import Tree from './components/appBody/tree/tree';

const App = () => {
  const [test, setTest] = useState(1);

  useEffect(() => {
    console.log(test);
  }, []);

  useEffect(() => {
    return () => {
      console.log(test);
    }
  }, []);

  return (
    <>
      <div class="header">
        <button onClick={() => setTest(test + 1)}>test</button>
      </div>
      <Tree />
    </>
  );
}

export default App;
