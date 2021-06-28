import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Spotify from "../../utils/Spotify.js";

function App() {
    const [searchResults, setSearchResults] = useState([]);

    /* When user clicks Search button in the SearchBar component - 
     call to spotify api is made and results saved in searchResults state
    */
    const search = (term) => {
        Spotify.search(term).then(tracks => setSearchResults(tracks))
    }

    /* useEffect function that calls Spotify.getAccessToken on page load,
     this triggers redirect to spotify api auth login so users can use
     the web app straight away. 
    */
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
