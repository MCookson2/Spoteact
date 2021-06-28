import React from 'react';
import './SearchResults.css';

function SearchResults(props) {

    // Mapping over searchresults array of objects 
    // grabs tracks from state and returns each track property cleanly.
    // want to add more objects from the api here. Such as open song in spotify etc...
    const listTracks = () => {
        const tracks = props.results;
        return tracks.map(track => (
            <div key={track.id}>
                <h3>{track.name}</h3> 
                <p>{track.artist}  ||  {track.album}</p>
            </div>
        ))
    }

    // returning SearchResults component, this calls the listTracks() function to render the tracks.
    return (
        <div className="SearchResults">
            {listTracks()}
        </div>
    )
}

export default SearchResults;