import { useComboBox } from "./hooks/useComboBox";

type ComboBoxOptionProps = {
    value: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function ComboBoxOption({
    value: optionValue,
    children,
    ...props
}: ComboBoxOptionProps) {
    const { value, setValue, setOpen, multiple } = useComboBox();

    const isSelected = multiple
        ? Array.isArray(value) && value.includes(optionValue)
        : value === optionValue;

    const handleClick = () => {
        if (multiple) {
            const currentValues = Array.isArray(value) ? value : [];
            const newValues = isSelected
                ? currentValues.filter((v) => v !== optionValue)
                : [...currentValues, optionValue];
            setValue(newValues);
        } else {
            setValue(optionValue);
            setOpen(false);
        }
    };

    return (
        <div
            {...props}
            role="option"
            aria-selected={isSelected}
            onClick={handleClick}
            data-slot="combobox-option"
            data-selected={isSelected}
        >
            {children}
        </div>
    );
}
