// import React from "react";
// import { ActionIcon } from "@mantine/core";
// import { SunIcon, MoonIcon } from "@modulz/radix-icons";
// import ColorSchemeContext from "./ColorSchemeContext";

// export const ColorThemeToggle = () => {
//   const colorSchemeContext = useContext(ColorSchemeContext);
//   const dark = colorSchemeContext.colorScheme === "dark";

//   return (
//     <ActionIcon
//       variant="outline"
//       color={dark ? "yellow" : "blue"}
//       onClick={() => colorSchemeContext.onChange(dark ? "light" : "dark")}
//       title="Toggle color scheme"
//     >
//       {dark ? (
//         <SunIcon style={{ width: 18, height: 18 }} />
//       ) : (
//         <MoonIcon style={{ width: 18, height: 18 }} />
//       )}
//     </ActionIcon>
//   );
// };
