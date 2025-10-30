import { createContext } from "react";

type DatePickerContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    selectedDate: Date | null;
    setSelectedDate: (date: Date | null) => void;
    triggerRef: React.RefObject<HTMLButtonElement | null>;
    panelRef: React.RefObject<HTMLDivElement | null>;
};

export const DatePickerContext = createContext<DatePickerContextValue | null>(
    null
);
