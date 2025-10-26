import { useId, type ReactNode } from "react";
import { useAccordion } from "./hooks/useAccordian";

// Panel
type AccordionPanelProps = {
    children: ReactNode;
    value: string;
    style?: React.CSSProperties;
};

export function AccordionPanel({
    children,
    value,
    style,
}: AccordionPanelProps) {
    const { openItems } = useAccordion();
    const isOpen = openItems.includes(value);
    const panelId = useId();

    if (!isOpen) return null;

    return (
        <div
            style={{ ...style, width: "100%" }}
            id={panelId}
            role="region"
            aria-labelledby={panelId}
            data-slot="accordion-panel"
        >
            {children}
        </div>
    );
}
