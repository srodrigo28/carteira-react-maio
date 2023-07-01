import { Container } from "./styles";

interface IpropsContent {
    children?: React.ReactNode
}

export function Content( {children} : IpropsContent ) {
    return (
        <Container>
            {children}
        </Container>
    )
}