import { createContext } from "react";

type TooltipContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    triggerRef: React.RefObject<HTMLElement | null>;
    contentRef: React.RefObject<HTMLDivElement | null>;
};

export const TooltipContext = createContext<TooltipContextValue | null>(null);
