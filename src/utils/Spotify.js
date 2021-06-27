import { clientId, redirectUri } from "./keys";

const clientID = clientId;
const redirectURI = redirectUri;

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken
        }
        

        const hash = window.location.hash.substring(1);
        const accessString = hash.indexOf('&');
        accessToken = hash.substring(13, accessString);

        if (accessToken) {
            return accessToken
        } else {
            const accessUrl =`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
        }
    },

    search(term) {
        const token = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(result => result.json()
         ).then(jsonResult => jsonResult.tracks.items
         ).then(tracks => tracks.map((track) => {
            return {
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name
            }
         }))
    },

    accessPlaylists() {
        const token = Spotify.getAccessToken();
        const result = fetch("https://api.spotify.com/v1/me/playlists", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return console.log(result);
    }
}

export default Spotify;