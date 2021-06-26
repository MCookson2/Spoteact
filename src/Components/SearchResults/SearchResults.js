import React from 'react';
import './SearchResults.css';

function SearchResults(props) {

    const listTracks = () => {
        const tracks = props.results;
        console.log(tracks)
        return tracks.map(track => (
            <li key={track.id}>{track.name}, {track.artist}, {track.album}</li>
        ))
    }

    return (
        <div className="SearchResults">
            <ul>
                {listTracks()}
            </ul>
        </div>
    )
}

export default SearchResults;