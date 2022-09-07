import styled from "styled-components";
import { Link } from "react-router-dom";
const MenuList = ({ items }) => {
  return (
    <Ul>
      {items.map((name, index) => (
        <Li key={index}>
            <Link className="menu-item" to={"/"} key={index}>{name}</Link>
        </Li>
      ))}
    </Ul>
  );
};
export default MenuList;
const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
const Li = styled.li` 
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    .menu-item{
        font-size: 20px;
        position: relative;
        text-decoration: none;
        color:black;
        &:before{
            content: " ";
            background: linear-gradient(.25turn,var(--amarillo),var(--violeta))
            position: absolute;
            bottom: -10px;
            height: 5px;
            width: 0%;
            transition: all 0.5s ease;
        }
        &:hover::after{
            width: 100%;
            }
    }
`;
