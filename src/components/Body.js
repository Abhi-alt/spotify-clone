import styled from "styled-components";
import Header from "./Header";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { connect } from "react-redux";
import Songs from "./Songs";

function Body({ spotify, state }) {
  return (
    <Container>
      <Header spotify={spotify} />
      <Content>
        <Img src={state.weekly.images ? state.weekly.images[0].url : ""} />
        <div>
          <h5>PLAYLIST</h5>
          <h3>{state.weekly ? state.weekly.name : ""}</h3>
          <p>{state.weekly?.description}</p>
        </div>
      </Content>
      <Function>
        <Icons>
          <PlayCircleFilledOutlinedIcon fontSize="large" />
          <FavoriteBorderOutlinedIcon />
          <MoreHorizOutlinedIcon />
        </Icons>
      </Function>
      {state.weekly.tracks
        ? state.weekly.tracks.items.map((item) => {
            return <Songs key={item.track.id} track={item} />;
          })
        : ""}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps)(Body);

const Container = styled.div`
  flex: 0.8;
  padding: 35px;
  background: linear-gradient(rgb(83, 83, 83), rgba(0, 0, 0, 1));
  color: white;
  overflow-y: scroll;
  height: 100vh;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: flex-end;
  div {
    flex: 1;
  }
`;

const Img = styled.img`
  margin: 20px 15px 0 0;
  height: 15vw;
`;
const Function = styled.div`
  margin-top: 30px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 15px;
    transition: transform 0.2s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
    :first-child {
      color: green;
      font-size: 3rem;
    }
  }
`;
