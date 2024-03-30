import Background from "../../components/background/background";
import { Button } from "../../components/button/button";
import { useTheme } from "../../utils/providers/theme";

const HomePage = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <Background>
      <Button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </Button>
      <Button variant="secondary">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="ghost">Button</Button>
    </Background>
  );
};
export default HomePage;
