import React, { createContext, useState, useContext } from "react";

interface IAuthContext{
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}
interface IpropsChildren{
    children: React.ReactNode;
}
const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const AuthProvider: React.FC<IpropsChildren> = ({ children }) => {
    // pega a condicional
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@application:logged');

        return !!isLogged;
    });
    // caso valido ele pega os dados seta true
    const signIn = (email: string, password: string) => {
        if (email === 'admin@gmail.com' && password === '123') {
            localStorage.setItem('@application:logged', 'true');
            setLogged(true);
        } else {
            alert('Senha ou usuário inválidos!');
        }
    }
    // caso inválido ou sair ele seta os dados como false
    const signOut = () => {
        localStorage.removeItem('@application:logged');
        setLogged(false);
    }
    // repassa a condição para o elemento filho
    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}
function useAuth(): IAuthContext{
    const context = useContext(AuthContext);

    return context;
}
export { AuthProvider, useAuth }