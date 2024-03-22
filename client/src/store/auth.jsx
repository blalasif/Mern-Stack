import { createContext, useContext } from "react";
import { AuthProvider } from "./AuthProvider";

export const AuthContext = createContext();

export default AuthProvider

export const useAuth = () => {
    const authContextValue = useContext(AuthContext)
    if (!authContextValue) {
        throw new Error("useAuth used Outside of the")
    }
    return authContextValue;
}