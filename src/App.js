import React from 'react';
import AddToDo from './features/AddToDo';
import Displaytodos from './features/Displaytodo';

function App() {
  return (
    <div className="App">
        <AddToDo/>
        <Displaytodos/>
    </div>
  );
}

export default App;
