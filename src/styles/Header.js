import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 500;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
`;
export const TopBar = styled.div`
  height: 10px;
  background: linear-gradient(0.25turn, var(--amarillo), var(--violeta));
`;
export const Section = styled.section`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export const Logo = styled.div`
    padding: 5px;
    height: 70px;
    img {
      height: 50px;
    }
  @media only screen and (min-width: 768px) {
    padding: 15px 20px;
    height: 90px;
    img {
      height: 60px;
    }
  }
`;
export const Section2 = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;