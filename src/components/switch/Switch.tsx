import { useState, useRef } from "react";
import type { ReactNode } from "react";
import { SwitchContext } from "./SwitchContext";

type SwitchProps = {
    children: ReactNode;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
};

export function Switch({
    children,
    checked: controlledChecked,
    defaultChecked = false,
    onChange,
    disabled = false,
}: SwitchProps) {
    const [uncontrolledChecked, setUncontrolledChecked] =
        useState(defaultChecked);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : uncontrolledChecked;

    const setChecked = (newChecked: boolean) => {
        if (!isControlled) {
            setUncontrolledChecked(newChecked);
        }
        onChange?.(newChecked);
    };

    return (
        <SwitchContext.Provider
            value={{ checked, setChecked, disabled, buttonRef }}
        >
            {children}
        </SwitchContext.Provider>
    );
}
