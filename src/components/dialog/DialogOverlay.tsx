import { useDialogContext } from "./dialogContext";

export function DialogOverlay({
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { onClose } = useDialogContext();
    return (
        <div
            {...props}
            style={{
                ...props.style,
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                display: "grid",
                placeItems: "center",
            }}
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            data-slot="dialog-overlay"
        >
            {children}
        </div>
    );
}
