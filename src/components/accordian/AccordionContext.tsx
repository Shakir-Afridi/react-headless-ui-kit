import { createContext } from "react";

type AccordionContextValue = {
    openItems: string[];
    toggleItem: (id: string) => void;
    multiple: boolean;
};

export const AccordionContext = createContext<AccordionContextValue | null>(
    null
);
