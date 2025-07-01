import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

export function useTheme() {
    return useContext(themeContext)
}