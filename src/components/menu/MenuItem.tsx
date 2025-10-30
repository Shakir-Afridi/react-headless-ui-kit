import { useMenu } from "./hooks/useMenu";

export function MenuItem({
    children,
    onClick,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { setOpen } = useMenu();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
        setOpen(false);
    };

    return (
        <button
            {...props}
            role="menuitem"
            tabIndex={-1}
            onClick={handleClick}
            data-slot="menu-item"
            style={{ display: "block", ...props.style }}
        >
            {children}
        </button>
    );
}
