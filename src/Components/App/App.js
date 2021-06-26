import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";

function App() {
    const [searchResults, setSearchResults] = useState([
        {name: "Song 1", artist: "Artist 1", album: "Album 1", id: 1},
        {name: "Song 2", artist: "Artist 2", album: "Album 2", id: 2},
        {name: "Song 3", artist: "Artist 3", album: "Album 3", id: 3}
    ]);
    
    return (
        <div className="App">
            <header className="App-header">
                <h1>Spoteact</h1>
            </header>
            <SearchBar />
            <SearchResults results={searchResults}/>
            
        </div>
    );
}

export default App;
