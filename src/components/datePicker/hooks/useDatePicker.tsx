import { useContext } from "react";
import { DatePickerContext } from "../DatePickerContext";

export function useDatePicker() {
    const context = useContext(DatePickerContext);
    if (!context) {
        throw new Error("useDatePicker must be used within a DatePicker");
    }
    return context;
}
