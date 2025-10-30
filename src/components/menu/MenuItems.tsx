import { useMenu } from "./hooks/useMenu";
import { useEffect } from "react";

export function MenuItems({
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { open, itemsRef, buttonRef, activeIndex, setActiveIndex, setOpen } =
        useMenu();

    useEffect(() => {
        if (!open || !itemsRef.current) return;

        const items = Array.from(
            itemsRef.current.querySelectorAll('[role="menuitem"]')
        ) as HTMLElement[];

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                const nextIndex =
                    activeIndex < items.length - 1 ? activeIndex + 1 : 0;
                setActiveIndex(nextIndex);
                items[nextIndex]?.focus();
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                const prevIndex =
                    activeIndex > 0 ? activeIndex - 1 : items.length - 1;
                setActiveIndex(prevIndex);
                items[prevIndex]?.focus();
            } else if (e.key === "Home") {
                e.preventDefault();
                setActiveIndex(0);
                items[0]?.focus();
            } else if (e.key === "End") {
                e.preventDefault();
                setActiveIndex(items.length - 1);
                items[items.length - 1]?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, activeIndex, itemsRef, setActiveIndex]);

    if (!open) return null;

    return (
        <div
            {...props}
            style={{ ...props.style, position: "absolute" }}
            ref={itemsRef}
            role="menu"
            aria-labelledby={buttonRef.current?.id}
            tabIndex={-1}
            data-slot="menu-items"
        >
            {children}
        </div>
    );
}
