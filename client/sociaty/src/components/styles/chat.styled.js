import styled from "styled-components";

export const Container = styled.div`
height: 1200px;
width: 100%;
background-color:pink;
display: flex;
flex-direction: column;
justify-content: center;
.chatcontainer {
  height:900px;
  width: 80%;
  background-color:white;
  display:grid
  grid-template-columns: 25% 75%;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: 35% 65%;
    }
}
`;
