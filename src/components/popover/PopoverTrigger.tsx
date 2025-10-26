import { usePopover } from "./hooks/usePopover";

// Trigger
export function PopoverTrigger({
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { open, setOpen, triggerRef } = usePopover();
    return (
        <button
            {...props}
            ref={triggerRef}
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            data-slot="popover-trigger"
        >
            {children}
        </button>
    );
}
