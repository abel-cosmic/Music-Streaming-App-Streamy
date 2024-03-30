import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./utils/providers/theme";
import { LanguageProvider } from "./utils/providers/language";
import router from "./libs/router";
import "./index.css";

// only put providers here that need to be at the top level

function App() {
  return (
    <LanguageProvider defaultLanguage="en" storageKey="preferredLanguage">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
