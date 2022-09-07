import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavbarWrapper , TopBar , MidBar, BotBar } from "../../styles/NavbarStyles";
import An from "../../assets/an.png";
const Navbar = ({open}) => {
  return (
    <NavbarWrapper open={open}>
      <TopBar>
        <img src={An} alt="An" />
      </TopBar>
      <MidBar>
      </MidBar>
      <BotBar>
        <FaFacebook className="icons" />
        <FaLinkedin className="icons" />
        <FaInstagram className="icons" />
      </BotBar>
    </NavbarWrapper>
  );
};
export default Navbar;
