import { useId, type ReactNode } from "react";
import { useAccordion } from "./hooks/useAccordion";

// Header / Trigger
interface AccordionHeaderProps
    extends React.HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    value: string;
}

export function AccordionHeader({
    children,
    value,
    ...props
}: AccordionHeaderProps) {
    const { openItems, toggleItem } = useAccordion();
    const buttonId = useId();
    const panelId = useId();
    const isOpen = openItems.includes(value);

    return (
        <h3
            data-slot="accordion-header"
            {...props}
            style={{
                ...props.style,
                paddingTop: "0 !important",
                paddingBottom: "0 !important",
                margin: 0,
            }}
        >
            <div
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(value)}
                data-slot="accordion-trigger"
            >
                {children}
            </div>
        </h3>
    );
}
