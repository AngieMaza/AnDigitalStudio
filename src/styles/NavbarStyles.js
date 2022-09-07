import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: fixed;
  top: 10px;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  transition: right 0.3s linear;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const TopBar = styled.div`
height: 100px;
text-align: center;
padding: 0.5em;
img{
  height: 50px;
}
`;
export const MidBar = styled.div`
height:calc(100% - 100px - 50px)
`;
export const BotBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:40px;
padding:5px;
.icons {
    margin-right: 1rem;
    font-size: 24px;
}
`;

