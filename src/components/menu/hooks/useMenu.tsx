import { useContext } from "react";
import { MenuContext } from "../MenuContext";

export function useMenu() {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a Menu component");
    }
    return context;
}
