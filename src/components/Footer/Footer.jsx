import {FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FooterContainer, Left , Right , Title }from "../../styles/Footer";
import An from "../../assets/an.png";

export default function Footer() {

    const ICON_SIZE = 25;

    return (
        <FooterContainer>
            <Left>
                <img src={An} alt="Logoan"/>
                <Title> © 2022 An Digital|Studio</Title>
            </Left>
            <Right>
                <FaFacebook className="icon" size={ICON_SIZE}/>
                <FaLinkedinIn className="icon" size={ICON_SIZE}/>
                <FaInstagram className="icon" size={ICON_SIZE}/>
            </Right>
        </FooterContainer>
    );
}