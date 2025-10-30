import { useComboBox } from "./hooks/useComboBox";

export function ComboBoxOptions({
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { open, optionsRef, inputRef } = useComboBox();

    if (!open) return null;

    return (
        <div
            {...props}
            style={{ ...props.style, position: "absolute" }}
            ref={optionsRef}
            role="listbox"
            aria-labelledby={inputRef.current?.id}
            tabIndex={-1}
            data-slot="combobox-options"
        >
            {children}
        </div>
    );
}
