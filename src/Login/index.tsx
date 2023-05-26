import { useState } from "react";
import { Container } from "./style";

export function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    return (
        <Container>
            <form>
                <input
                    required
                    type="text"
                    placeholder="email@dominio.com.br"
                />
                <input
                    required
                    type="text"
                    placeholder="****************"
                />
            </form>
        </Container>
    )
}