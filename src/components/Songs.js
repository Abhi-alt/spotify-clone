import styled from "styled-components";

function Songs({ track }) {
  return (
    <Container>
      <Img src={track.track?.album?.images[0].url} />
      <Content>
        <h4>{track.track?.name}</h4>
        <p>{track.track?.artists.map((artist) => artist.name).join(", ")}</p>
      </Content>
    </Container>
  );
}

export default Songs;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 50px;
  margin-right: 20px;
  margin-top: 10px;
`;

const Content = styled.div`
  h4 {
    font-weight: 700;
  }
  p {
    color: grey;
  }
`;
