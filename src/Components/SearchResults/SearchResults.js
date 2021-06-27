import React from 'react';
import './SearchResults.css';

function SearchResults(props) {

    const listTracks = () => {
        const tracks = props.results;
        return tracks.map(track => (
            <div key={track.id}>
                <h3>{track.name}</h3> 
                <p>{track.artist}  ||  {track.album}</p>
            </div>
        ))
    }

    return (
        <div className="SearchResults">
            {listTracks()}
        </div>
    )
}

export default SearchResults;