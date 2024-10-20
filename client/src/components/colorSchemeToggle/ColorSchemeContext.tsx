import { createContext, Dispatch, SetStateAction } from "react";

interface ColorSchemeContextProps {
  colorScheme: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const ColorSchemeContext = createContext<ColorSchemeContextProps | undefined>(
  undefined
);

export default ColorSchemeContext;
