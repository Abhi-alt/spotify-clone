import styled from "styled-components";
import Logo from "../images/Spotify.png";
import SideBarOptions from "./SideBarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

import { connect } from "react-redux";

function SideBar(props) {
  return (
    <>
      <Container>
        <Img src={Logo} />
        <SideBarOptions Icon={HomeIcon} title="Home" />
        <SideBarOptions Icon={SearchIcon} title="Search" />
        <SideBarOptions Icon={LibraryMusicIcon} title="Your Library" />
        <br />
        <h5>PLAYLISTS</h5>
        <hr />
        {props.state.playlist.map((lst) => {
          return <SideBarOptions key={lst.id} title={lst.name} />;
        })}
      </Container>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps)(SideBar);

const Container = styled.div`
  flex: 0.2;
  height: 100vh;
  background-color: #040404;
  color: white;
  padding: 0 5px;
  padding-bottom: 20px;
  min-width: 230px;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  h5 {
    margin-left: 15px;
    font-size: 1rem;
  }
  hr {
    width: 90%;
    margin: 10px auto;
    border: 1px solid #282828;
  }
`;

const Img = styled.img`
  object-fit: contain;
  max-height: 70px;
  height: 50px;
  margin-top: 30px;
  margin-right: auto;
`;
