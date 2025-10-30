import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { DatePickerContext } from "./DatePickerContext";
import { DatePickerTrigger } from "./DatePickerTrigger";
import { DatePickerPanel } from "./DatePickerPanel";

type DatePickerProps = {
    children?: ReactNode;
    defaultDate?: Date | null;
    onDateChange?: (date: Date | null) => void;
    placeholder?: string;
    width?: string;
    custom?: boolean;
};

export function DatePicker({
    children,
    placeholder,
    defaultDate = null,
    onDateChange,
    width,
    custom,
}: DatePickerProps) {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(defaultDate);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const handleClick = (e: MouseEvent) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(e.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(e.target as Node)
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

    // Notify parent of date changes
    useEffect(() => {
        if (onDateChange) {
            onDateChange(selectedDate);
        }
    }, [selectedDate, onDateChange]);

    return (
        <DatePickerContext.Provider
            value={{
                open,
                setOpen,
                selectedDate,
                setSelectedDate,
                triggerRef,
                panelRef,
            }}
        >
            {custom ? (
                children
            ) : (
                <>
                    <DatePickerTrigger
                        placeholder={placeholder}
                        style={{ width: width || "200px" }}
                    />
                    <DatePickerPanel />
                </>
            )}
        </DatePickerContext.Provider>
    );
}
