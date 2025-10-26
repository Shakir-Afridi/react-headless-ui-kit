// Accordion.tsx
import { useState } from "react";
import type { ReactNode } from "react";
import { AccordionContext } from "./AccordionContext";

type AccordionProps = {
    children: ReactNode;
    /** Allow multiple items open at once? */
    multiple?: boolean;
    defaultOpenItems?: string[];
};

export function Accordion({
    children,
    multiple = false,
    defaultOpenItems = [],
}: AccordionProps) {
    const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);

    const toggleItem = (id: string) => {
        setOpenItems((prev) => {
            const isOpen = prev.includes(id);
            if (multiple) {
                // Multi-open mode
                return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
            } else {
                // Single-open mode
                return isOpen ? [] : [id];
            }
        });
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem, multiple }}>
            <div data-slot="accordion">{children}</div>
        </AccordionContext.Provider>
    );
}
