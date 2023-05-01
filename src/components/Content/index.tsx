import { Container } from "./styles";

interface ChildrenProps {
    children?: React.ReactNode
}

const Content: React.FC<ChildrenProps> = ( {children} ) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Content;