import { useDialogContext } from "./dialogContext";

export function DialogOverlay({
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { onClose } = useDialogContext();
    return (
        <div
            {...props}
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            data-slot="dialog-overlay"
        >
            {children}
        </div>
    );
}
