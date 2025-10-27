import type { ReactNode } from "react";

// Item
type AccordionItemProps = {
    children: ReactNode;
    value?: string;
    style?: React.CSSProperties;
};

export function AccordionItem({ children, value, style }: AccordionItemProps) {
    return (
        <div
            data-slot="accordion-item"
            data-value={value}
            style={{ ...style, width: "100%" }}
        >
            {children}
        </div>
    );
}
