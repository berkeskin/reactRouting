import { useState } from "react";
import { AuthContext } from "./context";

export const AuthProvider = ({children}) => {

const [name, setName] = useState("");

    return <AuthContext.Provider 
    value={{
        token: null,
        name,
        setName,

    }}>
        {children}
    </AuthContext.Provider>
}

