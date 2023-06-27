import "./App.css";
import CookiePopup from "./components/PopUps/Cookies/CookiePopup";
import { AppRoutes } from "./routes/AppRoutes";

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#ffffff",
    secondary: "#FF7F00"
  }
};
export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CookiePopup />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}
