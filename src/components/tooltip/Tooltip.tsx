import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { TooltipContext } from "./TooltipContext";

type TooltipProps = {
    children: ReactNode;
    delay?: number;
};

export function Tooltip({ children, delay = 200 }: TooltipProps) {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Close on Escape
    useEffect(() => {
        if (!open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open]);

    const handleOpen = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setOpen(true);
        }, delay);
    };

    const handleClose = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setOpen(false);
    };

    return (
        <TooltipContext.Provider
            value={{ open, setOpen, triggerRef, contentRef }}
        >
            <div
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
                onFocus={handleOpen}
                onBlur={handleClose}
                style={{ display: "inline-block", position: "relative" }}
            >
                {children}
            </div>
        </TooltipContext.Provider>
    );
}
