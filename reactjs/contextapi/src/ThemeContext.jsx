// it is a dart store used to store data without givi it to the App.jsx

import { createContext, useState } from "react";

// ThemeCOntext is not a component
export const ThemeContext = createContext();
export function ThemeProvider({children}){
    const [theme, setTheme] =useState("light")

    const toggleTheme=() =>{
        setTheme(theme === "light" ? "dark":"light");
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>

    );
}

