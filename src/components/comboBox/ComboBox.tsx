import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { ComboBoxContext } from "./ComboBoxContext";

type ComboBoxProps = {
    children: ReactNode;
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    multiple?: boolean;
};

export function ComboBox({
    children,
    value: controlledValue,
    onChange,
    multiple = false,
}: ComboBoxProps) {
    const [open, setOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<string | string[]>(
        multiple ? [] : ""
    );
    const inputRef = useRef<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >(null);
    const optionsRef = useRef<HTMLDivElement>(null);

    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const setValue = (newValue: string | string[]) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    };

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const handleClick = (e: MouseEvent) => {
            if (
                optionsRef.current &&
                !optionsRef.current.contains(e.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(e.target as Node)
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
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open]);

    return (
        <ComboBoxContext.Provider
            value={{
                open,
                setOpen,
                value,
                setValue,
                inputRef,
                optionsRef,
                multiple,
            }}
        >
            {children}
        </ComboBoxContext.Provider>
    );
}
