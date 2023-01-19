import React from 'react';
import './App.css';
import {MyComponent} from "./components/myComponent";
import {Developer, Orientation} from "./models/developer";


function App() {
  const developer : Developer = {
    id: 1, orientation: Orientation.Whatever
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={'logo-drorsoft.png'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Edit the models and assign them as props to component.
        </p>

      </header>
      <MyComponent developer={developer} name={"Steve Jobs"}></MyComponent>
    </div>
  );
}

export default App;
