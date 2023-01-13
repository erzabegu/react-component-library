import {useEffect, useState} from 'react';

const useDarkMode = () => {

    const [theme, setTheme] = useState('light')
    useEffect(() => {
        document.documentElement.setAttribute("theme", "dark")
    }, [])
    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.setAttribute("theme", "dark")
            setTheme('light')
        } else {
            document.documentElement.setAttribute("theme", "light")
            setTheme('dark')
        }
    }

    return {
        theme,
        toggleTheme,
    }

}

export default useDarkMode