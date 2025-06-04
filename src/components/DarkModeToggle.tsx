import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Init från localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const html = document.documentElement;
    const enabled = html.classList.toggle("dark");
    setIsDark(enabled);
    localStorage.setItem("theme", enabled ? "dark" : "light");
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={toggleDarkMode}
        className={`relative w-14 h-8 flex items-center rounded-full transition-colors duration-300
        ${isDark ? "bg-gray-700" : "bg-gray-500"}`}
      >
        <span
          className={`absolute text-lg transition-transform duration-300
          ${isDark ? "translate-x-7" : "translate-x-1"}`}
        >
          {isDark ? "🌙" : "🌞"}
        </span>
      </button>
    </div>
  );
};
