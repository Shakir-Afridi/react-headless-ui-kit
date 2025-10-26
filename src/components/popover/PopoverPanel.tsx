import { usePopover } from "./hooks/usePopover";

// Panel
export function PopoverPanel({
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { open, panelRef, triggerRef } = usePopover();

    if (!open) return null;

    return (
        <div
            {...props}
            style={{ ...props.style, position: "absolute" }}
            ref={panelRef}
            role="dialog"
            aria-modal="false"
            aria-labelledby={triggerRef.current?.id}
            tabIndex={-1}
            data-slot="popover-panel"
        >
            {children}
        </div>
    );
}
