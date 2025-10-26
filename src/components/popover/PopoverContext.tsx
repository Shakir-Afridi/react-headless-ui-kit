import { createContext } from "react";

type PopoverContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    triggerRef: React.RefObject<HTMLButtonElement | null>;
    panelRef: React.RefObject<HTMLDivElement | null>;
};

export const PopoverContext = createContext<PopoverContextValue | null>(null);
