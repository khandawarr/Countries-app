import { useTheme } from "../../hooks/useTheme";

export default function Header() {
  const [isDark, setIsDark] = useTheme();
  localStorage.setItem("isDarkMode", isDark);
  // if (isDark) {
  //   document.body.classList.add('Dark')
  // } else {
  //   document.body.classList.remove('Dark')
  // }
  return (
    <header className={!isDark ? "Dark" : ""}>
      <div className="header-content">
        <h1>
          <a href="/">Where in the world?</a>
        </h1>
        <p
          className="Theme-changer"
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          <i className={`fa-solid fa-${!isDark ? "sun" : "moon"}`}></i>
          <span className="theme-text">{!isDark ? "Light" : "Dark"} mode</span>
        </p>
      </div>
    </header>
  );
}
