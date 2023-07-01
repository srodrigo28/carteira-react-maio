import { useMemo } from 'react';
import emojis from '../../utils/emojis';

import {
    Container,
    Profile,
    UserName,
    Welcome,
} from "./styles";
import {Toggle} from "../Toogle";

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>admin</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;