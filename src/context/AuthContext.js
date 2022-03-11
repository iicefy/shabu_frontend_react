import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {

    const authData = {}

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("Error context undefined");
    }
    return context;
};