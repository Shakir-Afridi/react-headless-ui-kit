// Dialog.tsx
import { useRef, useEffect, useLayoutEffect, useId } from "react";
import type { ReactNode } from "react";

import { createPortal } from "react-dom";
import { DialogContext } from "./dialogContext";

type DialogRootProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    container?: Element | null;
};

export function Dialog({
    open,
    onClose,
    children,
    container,
}: DialogRootProps) {
    const titleId = useId();
    const descriptionId = useId();
    const lastActiveRef = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        if (open) lastActiveRef.current = document.activeElement as HTMLElement;
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.stopPropagation();
                onClose();
            }
        };
        document.addEventListener("keydown", onKeyDown, true);

        return () => {
            document.body.style.overflow = prevOverflow;
            document.removeEventListener("keydown", onKeyDown, true);
            lastActiveRef.current?.focus?.();
        };
    }, [open, onClose]);

    if (!open) return null;

    const handleOpen = () => {
        // you could add side effects here if needed
        console.log("Dialog opened");
    };

    const portalTarget = container ?? document.body;

    return createPortal(
        <DialogContext.Provider
            value={{
                onClose,
                titleId,
                descriptionId,
                open,
                onOpen: handleOpen,
            }}
        >
            {children}
        </DialogContext.Provider>,
        portalTarget
    );
}
