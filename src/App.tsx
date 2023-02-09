import React from 'react';
import './App.css';
import {DataLoaderComponent} from "./components/dataLoaderComponent";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={'logo-drorsoft.png'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Edit the models and assign them as props to component.
        </p>
     <DataLoaderComponent></DataLoaderComponent>
      </header>

    </div>
  );
}

export default App;
