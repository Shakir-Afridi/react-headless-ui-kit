// Actions
export function DialogActions({
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} data-slot="dialog-actions">
            {children}
        </div>
    );
}
