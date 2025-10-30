import { useSwitch } from "./hooks/useSwitch";

export function SwitchLabel({
    children,
    style,
    ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
    const { buttonRef, disabled } = useSwitch();

    const handleClick = () => {
        buttonRef.current?.click();
    };

    const defaultStyle: React.CSSProperties = {
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none",
        opacity: disabled ? 0.5 : 1,
        ...style,
    };

    return (
        <label
            {...props}
            onClick={handleClick}
            style={defaultStyle}
            data-slot="switch-label"
        >
            {children}
        </label>
    );
}
