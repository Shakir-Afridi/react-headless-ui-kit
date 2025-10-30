import { createContext } from "react";

type MenuContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
    itemsRef: React.RefObject<HTMLDivElement | null>;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
};

export const MenuContext = createContext<MenuContextValue | null>(null);
