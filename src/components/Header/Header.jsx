import { useState } from "react";
import "../../index.css";
import An from "../../assets/an.png";
import MenuList from "./MenuList";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import { HeaderWrapper, TopBar , Section, Section2, Logo } from "../../styles/Header";
const Header = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <HeaderWrapper>
      <TopBar />
      <Section>
        <MenuList items={["Home", "Home"]} />
        <Logo>
          <img src={An} alt="logo-an" />
        </Logo>
        <MenuList items={["Home", "Home"]} />
      </Section>
      <Section2>
        <Logo>
          <img src={An} alt="logo-an" />
        </Logo>
        <Navbar open={open} />
        <MenuButton open={open} handleClick={handleClick} />
      </Section2>
    </HeaderWrapper>
  );
};
export default Header;
