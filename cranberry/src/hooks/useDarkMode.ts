import { useEffect, useState } from "react";
// import { useAppSelector } from "../store/hooks";
import lightBerry from './../assets/img/berry1.png';
import darkBerry from './../assets/img/berry2.png';

function useDarkMode(isLoggedIn: boolean) {

  // const { isLoggedIn } = useAppSelector(state => state.auth);

  const [logo, setLogo] = useState(lightBerry);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    if (isLoggedIn) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setLogo(darkBerry);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setLogo(lightBerry);
      }
    }
  }, [theme, isLoggedIn]);

  return { logo, theme, setTheme };
}

export default useDarkMode;