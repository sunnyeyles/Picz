import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/router";
import ColorSchemeContext from "./components/colorSchemeToggle/ColorSchemeContext";
function App() {
  const [colorScheme, setColorScheme] = useState("light");

  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme, onChange: setColorScheme }}
    >
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <RouterProvider router={Router} />
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}

export default App;
