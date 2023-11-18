import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type Theme = 'light' | 'dark';

export default function UseDarkSide(): [Theme, Dispatch<SetStateAction<Theme>>] {
  const [theme, setTheme] = useState<Theme>(localStorage.theme as Theme);
  const colorTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}