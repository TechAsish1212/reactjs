// import { useTheme } from "./ThemeContext";

import { useTheme } from "../context/ThemeContext";

function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <h1>{theme}</h1>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </>
  );
}

export default Home;