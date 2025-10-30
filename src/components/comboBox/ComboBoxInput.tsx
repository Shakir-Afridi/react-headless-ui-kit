import { useComboBox } from "./hooks/useComboBox";

type InputType =
    | "text"
    | "textarea"
    | "date"
    | "select"
    | "email"
    | "number"
    | "password";

type ComboBoxInputProps = {
    type?: InputType;
    placeholder?: string;
} & (
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>
    | React.SelectHTMLAttributes<HTMLSelectElement>
);

export function ComboBoxInput({
    type = "text",
    placeholder,
    ...props
}: ComboBoxInputProps) {
    const { open, setOpen, value, setValue, inputRef, multiple } =
        useComboBox();

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        if (type === "select" && multiple) {
            const selectElement = e.target as HTMLSelectElement;
            const selectedValues = Array.from(
                selectElement.selectedOptions
            ).map((option) => option.value);
            setValue(selectedValues);
        } else {
            setValue(e.target.value);
        }
    };

    const handleFocus = () => {
        if (type !== "select") {
            setOpen(true);
        }
    };

    if (type === "textarea") {
        return (
            <textarea
                {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                value={Array.isArray(value) ? value.join(", ") : value}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder={placeholder}
                aria-haspopup="listbox"
                aria-expanded={open}
                data-slot="combobox-input"
            />
        );
    }

    if (type === "select") {
        return (
            <select
                {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
                ref={inputRef as React.RefObject<HTMLSelectElement>}
                value={value}
                onChange={handleChange}
                multiple={multiple}
                aria-haspopup="listbox"
                data-slot="combobox-input"
            >
                {props.children}
            </select>
        );
    }

    return (
        <input
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type={type}
            value={Array.isArray(value) ? value.join(", ") : value}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder={placeholder}
            aria-haspopup="listbox"
            aria-expanded={open}
            data-slot="combobox-input"
        />
    );
}
