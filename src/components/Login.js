import styled from "styled-components";
import LogoImg from "../images/Spotify.png";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <Conatiner>
      <Content>
        <Logo src={LogoImg} />
        <Button href={loginUrl}>LOGIN WITH SPOTIFY</Button>
      </Content>
    </Conatiner>
  );
}

export default Login;

const Conatiner = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
`;

const Content = styled.div`
  display: grid;
  place-items: center;
`;

const Logo = styled.img`
  width: 450px;
  margin-bottom: 100px;
`;

const Button = styled.a`
  color: white;
  padding: 20px;
  background-color: #1ed760;
  border-radius: 90px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`;
