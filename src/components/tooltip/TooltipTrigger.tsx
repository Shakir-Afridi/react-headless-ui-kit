import { useTooltip } from "./hooks/useTooltip";

export function TooltipTrigger({
    children,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
    const { triggerRef } = useTooltip();

    return (
        <span
            {...props}
            ref={triggerRef as React.RefObject<HTMLSpanElement>}
            aria-describedby="tooltip-content"
            data-slot="tooltip-trigger"
        >
            {children}
        </span>
    );
}
