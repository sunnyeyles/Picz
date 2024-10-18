// import { createContext } from "react";

// export default createContext(null);
import { createContext, Dispatch, SetStateAction } from "react";

// Define the shape of the context value
interface ColorSchemeContextProps {
  colorScheme: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const ColorSchemeContext = createContext<ColorSchemeContextProps | undefined>(
  undefined
);

export default ColorSchemeContext;
