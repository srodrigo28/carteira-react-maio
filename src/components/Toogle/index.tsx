import { Container, ToggleLabel, ToggleSelector } from "./styles"

export function Toggle() {
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={() => console.log('mudou')}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    )
}