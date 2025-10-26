import { useDialogContext } from "./dialogContext";

// Title
export function DialogTitle({
    children,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    const { titleId } = useDialogContext();
    return (
        <h2 {...props} id={titleId} data-slot="dialog-title">
            {children}
        </h2>
    );
}
