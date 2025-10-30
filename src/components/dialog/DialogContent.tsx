import { useEffect, useRef } from "react";
import { useDialogContext } from "./dialogContext";

// Content
export function DialogContent({
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { titleId, descriptionId } = useDialogContext();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <div
            {...props}
            style={{
                ...props.style,
                background: props?.style?.background ?? "white",
            }}
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            tabIndex={-1}
            data-slot="dialog-content"
        >
            {children}
        </div>
    );
}
