import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styled from "styled-components"
import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
const Layout = () => {

    return (
        <Container>
            <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                </Routes>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
position: relative;
`;

export default Layout;