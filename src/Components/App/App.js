import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";

function App() {

    return (
        <div className="App">
        <header className="App-header">
            <h1>Spoteact</h1>
        </header>
        <SearchBar />
        </div>
    );
}

export default App;
