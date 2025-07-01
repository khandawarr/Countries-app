import { Outlet } from 'react-router';
import Header from './components/Header.jsx';
import './App.css';
import { ThemeProvider } from '../contexts/themeContext'; // ✅ Correct import
import { useTheme } from '../hooks/useTheme';
import { useEffect } from 'react';

function BodyClassController() {
  const [isDark] = useTheme();
  useEffect(() => {
    document.body.classList.toggle('Dark', !isDark);
  }, [isDark]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BodyClassController />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
