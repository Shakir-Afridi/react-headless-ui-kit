import { useContext } from "react";
import { AccordionContext } from "../AccordionContext";

export function useAccordion() {
    const ctx = useContext(AccordionContext);
    if (!ctx)
        throw new Error(
            "Accordion subcomponents must be used inside <Accordion>"
        );
    return ctx;
}
