import React from "react";
export const AuthContext=React.createContext();
const AuthContextProvider=({children})=>{
    const [isAuth,SetisAuth]=React.useState(JSON.parse(localStorage.getItem("Profile"))||false);
    const Login=()=>{
        SetisAuth(true)
    }
    const Logout=()=>{
        SetisAuth(false)
        localStorage.setItem("Profile",null)
    }
    return <AuthContext.Provider value={{isAuth,Login,Logout}}>{children}</AuthContext.Provider>
}
export {AuthContextProvider}