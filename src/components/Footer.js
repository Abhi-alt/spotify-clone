import styled from "styled-components";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

function Footer() {
  return (
    <Container>
      <Content>
        <Left>
          <Img src="https://play-lh.googleusercontent.com/QArRfmxLqZmsDysA7TN__PgkfzEz_UU_Sfha7bG-6k747JJsO7dJObuYdjuZvESmueE" />
          <div>
            <h5>Teri Bindiya</h5>
            <p>M. Rafi</p>
          </div>
        </Left>
        <Center>
          <ShuffleIcon />
          <SkipPreviousIcon />
          <PlayCircleOutlinedIcon fontSize="large" />
          <SkipNextIcon />
          <RepeatIcon />
        </Center>
        <Right>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" size="small" />
            <VolumeUp />
          </Stack>
        </Right>
      </Content>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  color: white;
  width: 100%;
  background-color: #282828;
  /* border: 1px solid red; */
  padding: 10px;
  position: sticky;
  bottom: 0;
  /* height: 65px; */
`;
const Content = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 0.3;
  display: flex;
  max-width: 300px;
  align-items: center;
  div {
    margin-left: 15px;
  }
`;
const Img = styled.img`
  object-fit: contain;
  width: 40px;
`;
const Center = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 420px;
  svg {
    transition: transform 0.2s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
  }
`;
const Right = styled.div`
  flex: 0.3;
  max-width: 230px;
  margin-right: 20px;
  span {
    color: green;
  }
`;
