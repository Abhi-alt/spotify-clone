//https://accounts.spotify.com/authorize

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";
const clientId = "3c67730d980642e38fb924a749ef6d5b";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getToken = () => window.location.hash.split("&")[0].split("=")[1];
