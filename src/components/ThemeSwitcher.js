import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (selectedTheme) => {
    const linkTag = document.getElementById("theme-link");
    if (linkTag) {
      linkTag.href = selectedTheme === "light" ? "light-mode.css" : "dark-mode.css";
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <Button variant="primary" onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
}

export default ThemeSwitcher;
