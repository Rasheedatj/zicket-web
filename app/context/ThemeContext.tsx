'use client'

// import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'

// type ThemeContextType = {
//     darkMode: boolean,
//     setDarkMode: Dispatch<SetStateAction<boolean>>
// } | null

// const ThemeContext = createContext<ThemeContextType>(null)

// export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

//     const [darkMode, setDarkMode] = useState(
//         localStorage.getItem('theme') === 'dark'
//     )

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme", "dark")
//         } else {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme", "light")
//         }
//     }, [darkMode])

//     return (
//         <ThemeContext.Provider value={{darkMode, setDarkMode}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// export const useTheme = () => {
//     const context = useContext(ThemeContext);

//     if (!context) {
//         throw new Error(`useDarkMode must be used within a ThemeProvider`)
//     }
// }

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}