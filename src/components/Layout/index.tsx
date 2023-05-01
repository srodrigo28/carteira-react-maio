import { Children } from "react";
import Dashboard from "../../pages/Dashboard";
import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";
import { Container } from "./styles";

interface ChildrenProps {
    children?: React.ReactNode
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <Container>
            <MainHeader />
            <Content>
                { children }
            </Content>
            <Aside /> 
        </Container>
    )
}

export default Layout;