import React, { useEffect, useState } from "react"

export default function ThemeProvider ({children}: {
    children: React.ReactElement
}) {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (!savedTheme || savedTheme !== 'light' || 'dark') return
        if (savedTheme) {
            setTheme(savedTheme)
        } else if (systemPrefersDark) {
            setTheme('dark')
        } else setTheme('light')
    }, [])

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? 'dark' : 'light')
    }
    return (
        <>
            {children}
        </>
    )
}