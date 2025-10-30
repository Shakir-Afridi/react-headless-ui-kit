import { useTooltip } from "./hooks/useTooltip";

export function TooltipContent({
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { open, contentRef } = useTooltip();

    if (!open) return null;

    return (
        <div
            {...props}
            style={{
                background: "#282c2f",
                color: "white",
                padding: "8px",
                borderRadius: "4px",
                width: "max-content",
                marginTop: "4px",
                ...props.style,
                position: "absolute",
            }}
            ref={contentRef}
            role="tooltip"
            id="tooltip-content"
            data-slot="tooltip-content"
        >
            {children}
        </div>
    );
}
