import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Spotify from "../../utils/Spotify.js";

function App() {
    const [searchResults, setSearchResults] = useState([]);

    const search = (term) => {
        Spotify.search(term).then(tracks => setSearchResults(tracks))
    }

    useEffect(() => {
        Spotify.getAccessToken()
    }, [])
    
    return (
        <div className="App">
            <header className="App-header">
                <h1>Spoteact</h1>
            </header>
            <SearchBar onSearch={search}/>
            <SearchResults results={searchResults}/>
            
        </div>
    );
}

export default App;
