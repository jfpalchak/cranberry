import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";

function useDarkMode() {

  const { isLoggedIn } = useAppSelector(state => state.auth);

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    if (isLoggedIn) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [theme, isLoggedIn]);

  return { theme, setTheme };
}

export default useDarkMode;