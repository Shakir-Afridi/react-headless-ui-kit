import { useSwitch } from "./hooks/useSwitch";

export function SwitchButton({
    children,
    style,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { checked, setChecked, disabled, buttonRef } = useSwitch();

    const handleClick = () => {
        if (!disabled) {
            setChecked(!checked);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            handleClick();
        }
    };

    const defaultStyle: React.CSSProperties = {
        width: "44px",
        height: "24px",
        borderRadius: "12px",
        border: "none",
        background: checked ? "#10b981" : "#d1d5db",
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.2s ease",
        opacity: disabled ? 0.5 : 1,
        ...style,
    };

    const thumbStyle: React.CSSProperties = {
        position: "absolute",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "white",
        top: "2px",
        left: checked ? "22px" : "2px",
        transition: "left 0.2s ease",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
    };

    return (
        <button
            {...props}
            ref={buttonRef}
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            style={defaultStyle}
            data-slot="switch-button"
            data-checked={checked}
            data-disabled={disabled}
        >
            {children || <span style={thumbStyle} />}
        </button>
    );
}
