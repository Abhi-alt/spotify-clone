import styled from "styled-components";
import { connect } from "react-redux";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function Header(props) {
  return (
    <Container>
      <Left>
        <SearchIcon />
        <input type="text" placeholder="Search Songs, Artist, Album" />
      </Left>
      <Right>
        <Avatar src={props.state?.user?.images[0]?.url} alt="AB" />
        <p>
          {props.state.user ? props.state.user?.display_name : "Unknown User"}
        </p>
      </Right>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { state: state };
};
export default connect(mapStateToProps)(Header);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex: 0.5;
  min-width: 100px;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  overflow: hidden;
  padding: 10px 20px;
  input {
    border: none;
    height: 100%;
    width: 100%;
    :focus {
      border: none;
      outline: none;
    }
  }
  svg {
    color: grey;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-left: 10px;
  }
`;
