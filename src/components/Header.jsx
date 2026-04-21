import { useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
export default function Header({ darkSwitchRef }) {
  const [dark, setDark] = useState(true);
  function handleTheme() {
    darkSwitchRef.current.classList.toggle('darkSwitchCSS')
  }
  return (
    <section className="header">
      <h1 className="brandName">devfinder</h1>
      <div className="theme">
        {
          <>
            <p className="theme_name">{dark ? 'light' : 'dark'}</p>
            <div
              className="theme_icon"
              onClick={() => {
                (setDark(prev => !prev), handleTheme());
              }}
            >
              {dark ? <MdLightMode /> : <MdDarkMode />}
            </div>
          </>
        }
      </div>
    </section>
  );
}
