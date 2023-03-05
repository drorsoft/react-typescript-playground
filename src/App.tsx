import React, {useState} from 'react';
import './App.css';
import {DataLoaderComponent} from "./components/dataLoaderComponent";
useState()
function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={'logo-drorsoft.png'} className="App-logo" alt="logo"/>
                <DataLoaderComponent></DataLoaderComponent>
            </header>

        </div>
    );
}

export default App;
