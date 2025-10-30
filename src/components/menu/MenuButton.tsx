import { useMenu } from "./hooks/useMenu";

export function MenuButton({
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { open, setOpen, buttonRef } = useMenu();

    return (
        <button
            {...props}
            ref={buttonRef}
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            data-slot="menu-button"
        >
            {children}
        </button>
    );
}
