import  {useEffect, useState} from 'react';

const useDarkMode = () => {

    const [theme, setTheme] = useState('light')
    useEffect(()=>{
        document.body.setAttribute("theme", "dark")
    },[])
    const toggleTheme = () => {
        if (theme === 'dark') {
            document.body.setAttribute("theme", "dark")
            setTheme('light')
        } else {
            document.body.setAttribute("theme", "light")
            setTheme('dark')
        }
    }

    return {
        theme,
        toggleTheme,
    }

}

export default useDarkMode