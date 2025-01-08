import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import "./theme.css"; 

type Theme = "light" | "dark";

export interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("sb-addon-themes-3");
        if (storedTheme) {
            const parsedTheme = JSON.parse(storedTheme);
            const currentTheme = parsedTheme?.current || "dark"; 
            setTheme(currentTheme);
        } 
        document.documentElement.setAttribute("class", theme); 
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
