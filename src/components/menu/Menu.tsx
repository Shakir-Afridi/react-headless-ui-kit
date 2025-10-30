import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { MenuContext } from "./MenuContext";

type MenuProps = {
    children: ReactNode;
};

export function Menu({ children }: MenuProps) {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const handleClick = (e: MouseEvent) => {
            if (
                itemsRef.current &&
                !itemsRef.current.contains(e.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    // Close on Escape
    useEffect(() => {
        if (!open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open]);

    return (
        <MenuContext.Provider
            value={{
                open,
                setOpen,
                buttonRef,
                itemsRef,
                activeIndex,
                setActiveIndex,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
}
