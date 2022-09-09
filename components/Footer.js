import { useTheme } from "next-themes";
import Moon from "@heroicons/react/24/solid/MoonIcon";
import Sun from "@heroicons/react/24/solid/SunIcon";

export default function Footer() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div>
        {theme === "light" && (
          <Moon className="w-6 h-6" onClick={toggleTheme} />
        )}
        {theme === "dark" && <Sun className="w-6 h-6" onClick={toggleTheme} />}
      </div>
      <div>
        <p>
          Copyright &copy; 2022-{new Date().getFullYear()} CodeTavern - All
          rights reserved
        </p>
      </div>
    </footer>
  );
}
