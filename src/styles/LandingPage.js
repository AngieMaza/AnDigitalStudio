import styled from "styled-components";

export const Div = styled.div`
  position: absolute;
`;
export const Logo = styled.div`
  position: relative;
  animation: dawncel;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  img {
    width: var(--an-size);
  }
  @media only screen and (min-width: 768px) {
    img {
      width: calc(var(--an-size) * 1.5);
    }
  @media only screen and (min-width: 1024px) {
    animation: dawn;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    img {
      width: calc(var(--an-size) * 2);
    }
  }
`;
export const Logo2 = styled.div`
  position: relative;
  animation: leftcel;
  animation-duration: 3s;
  animation-fill-mode: forwards; 
  img{
    width:var(--ds-size);
  }
  @media only screen and (min-width: 768px) {
    img{
      width:calc(var(--ds-size)*1.5);
    }
  }
  @media only screen and (min-width: 1024px) {
    animation: left;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    img{
      width:calc(var(--ds-size)*2);
    }
  }
`;
export const Span = styled.span`
position: relative;
top:45vh;
left:calc(50vw - 30px);
font-size:30px;
padding:5px 8px 0;
cursor: pointer;
border-radius: 50%;
box-shadow: 0 2px 10px var(--intermedio);
transition: all 0.3s ease-in-out;
:hover {
  box-shadow: 0 2px 10px var(--violeta);
  
}
@media only screen and (min-width: 768px) {
  font-size:30px;
  padding:5px 9px 0;
  left:calc(50vw + 10px);
}
@media only screen and (min-width: 1024px) {
  font-size:40px;
  padding:5px 10px 0;
  left:calc(50vw - 30px);
  top:55vh;
} 
`;