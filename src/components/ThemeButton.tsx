import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/shadcn/button";

interface ThemeButtonProps {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeButton = ({ dark, toggleTheme }: ThemeButtonProps) => {
  return (
    <Button onClick={toggleTheme} className="absolute top-2 right-2">
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeButton;
