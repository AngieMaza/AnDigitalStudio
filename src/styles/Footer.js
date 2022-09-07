import styled from "styled-components";

export const FooterContainer = styled.div`
    background: linear-gradient(.25turn,var(--amarillo),var(--violeta));
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 15;
`;
export const Left = styled.div`
    height:50px;
    display:flex;
    padding:10px;
    align-items: flex-end;
    img{
        height: 30px;
    }
`;
export const Title = styled.p`
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    margin-left: 10px;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
    color: white;
    > * {
        padding: 3px;
        margin-left: 10px;
        @media only screen and (max-width: 768px) {
        display: none;
        }
    }
`;