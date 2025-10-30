import { useId, type ReactNode, useRef, useEffect, useState } from "react";
import { useAccordion } from "./hooks/useAccordion";

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

    // Animation states
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState("0px");
    const [rendered, setRendered] = useState(isOpen);
    const [opacity, setOpacity] = useState(isOpen ? 1 : 0);

    useEffect(() => {
        if (isOpen) {
            setRendered(true);
            // Wait for next tick to get scrollHeight
            setTimeout(() => {
                if (ref.current) {
                    setHeight(ref.current.scrollHeight + "px");
                    setOpacity(1);
                }
            }, 10);
        } else {
            if (ref.current) {
                setHeight(ref.current.scrollHeight + "px");
            }
            setOpacity(0);
            setTimeout(() => {
                setHeight("0px");
            }, 10);
            // Remove from DOM after transition
            setTimeout(() => setRendered(false), 300);
        }
    }, [isOpen, children]);

    if (!rendered) return null;

    return (
        <div
            ref={ref}
            style={{
                ...style,
                width: "100%",
                height,
                opacity,
                overflow: "hidden",
                transition:
                    "height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s",
            }}
            id={panelId}
            role="region"
            aria-labelledby={panelId}
            data-slot="accordion-panel"
        >
            {children}
        </div>
    );
}
