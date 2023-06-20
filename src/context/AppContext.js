import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({children}) =>{
    const [blogs,setBlogs] = useState([]);

    const value = {
        blogs,
        setBlogs
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}