import { createContext, useState } from "react";

// Контекст для проверки авторизации пользователя
export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [cartFlowers, setCartFlowers] = useState([]);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                cartFlowers,
                setCartFlowers
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}