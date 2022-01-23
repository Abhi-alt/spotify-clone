import "./App.css";
import Login from "./components/Login";
import { getToken } from "./spotify";
import Player from "./components/Player";
import { connect } from "react-redux";
import { setToken, setUser, setPlaylist, setWeekly } from "./store/action";

import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

//client id spotify 3c67730d980642e38fb924a749ef6d5b

const spotify = new SpotifyWebApi();

function App(props) {
  useEffect(() => {
    const _token = getToken();
    if (_token) {
      props.setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => props.setUser(user));
      spotify
        .getUserPlaylists()
        .then((playlist) => props.setPlaylist(playlist.items));
      spotify
        .getPlaylist("37i9dQZF1E36lM9YKgnx0x")
        .then((resp) => props.setWeekly(resp));
    }
    window.location.hash = "";
  }, []);
  // console.log(props.state);
  return <>{props.state.token ? <Player spotify={spotify} /> : <Login />}</>;
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, {
  setToken,
  setUser,
  setPlaylist,
  setWeekly,
})(App);
