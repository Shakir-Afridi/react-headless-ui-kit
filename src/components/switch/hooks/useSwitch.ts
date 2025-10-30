import { useContext } from "react";
import { SwitchContext } from "../SwitchContext";

export function useSwitch() {
    const ctx = useContext(SwitchContext);
    if (!ctx)
        throw new Error("Switch subcomponents must be used inside <Switch>");
    const { checked, setChecked, disabled, buttonRef } = ctx;
    return { checked, setChecked, disabled, buttonRef };
}
