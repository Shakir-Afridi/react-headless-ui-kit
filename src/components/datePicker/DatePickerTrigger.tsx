import { useDatePicker } from "./hooks/useDatePicker";

export function DatePickerTrigger({
    placeholder = "Select date",
    ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "type">) {
    const { open, setOpen, triggerRef, selectedDate } = useDatePicker();

    const displayValue = selectedDate ? selectedDate.toLocaleDateString() : "";

    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
                width: props.style?.width || "200px",
            }}
        >
            <input
                {...props}
                type="text"
                readOnly
                value={displayValue}
                placeholder={placeholder}
                onClick={() => setOpen(!open)}
                aria-haspopup="dialog"
                aria-expanded={open}
                data-slot="datepicker-input"
                style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    outline: "none",
                    ...props.style,
                }}
            />
            <button
                ref={triggerRef}
                type="button"
                onClick={() => setOpen(!open)}
                aria-label="Open calendar"
                data-slot="datepicker-icon-button"
                style={{
                    position: "absolute",
                    right: "-0.5rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    padding: "0.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6b7280",
                }}
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            </button>
        </div>
    );
}
