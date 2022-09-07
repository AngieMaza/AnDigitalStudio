import "../index.css";
import { useNavigate } from "react-router-dom";
import Imagen1 from "../assets/an.png";
import Imagen2 from "../assets/digitalstudio.png";
import { FaHome } from "react-icons/fa";
import { Div , Logo, Logo2, Span } from "../styles/LandingPage";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <Logo>
        <img src={Imagen1} alt="an" />
      </Logo>
      <Logo2>
        <img src={Imagen2} alt="digital|studio" />
      </Logo2>
      <Span onClick={() => {
          navigate("/home");
        }}><FaHome/> </Span>
    </Div>
  );
};
export default LandingPage;

