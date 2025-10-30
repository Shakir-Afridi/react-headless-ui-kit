import { useContext } from "react";
import { ComboBoxContext } from "../ComboBoxContext";

export function useComboBox() {
    const ctx = useContext(ComboBoxContext);
    if (!ctx)
        throw new Error(
            "ComboBox subcomponents must be used inside <ComboBox>"
        );
    const { open, setOpen, value, setValue, inputRef, optionsRef, multiple } =
        ctx;
    return { open, setOpen, value, setValue, inputRef, optionsRef, multiple };
}
