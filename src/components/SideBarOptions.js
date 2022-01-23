import styled from "styled-components";

function SideBarOptions({ title, Icon }) {
  return (
    <>
      <Container>
        {Icon ? <Icon /> : null}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </Container>
    </>
  );
}

export default SideBarOptions;

const Container = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  /* align-items: center; */
  p,
  h4 {
    height: 35px;
    color: grey;
    cursor: pointer;
    margin-left: 10px;
    transition: 200ms color ease-in;
    :hover {
      color: white;
    }
  }
`;
