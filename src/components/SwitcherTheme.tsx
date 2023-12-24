import { useState } from 'react'
import UseDarkSide from '../Hooks/UseDarkSide'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function SwitcherTheme() {
  const [colorTheme, setTheme] = UseDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'dark');

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} moonColor='black'/>
    </div>
  );
}

export default SwitcherTheme