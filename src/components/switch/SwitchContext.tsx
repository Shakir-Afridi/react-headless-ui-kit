import { createContext } from "react";

type SwitchContextValue = {
    checked: boolean;
    setChecked: (checked: boolean) => void;
    disabled: boolean;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
};

export const SwitchContext = createContext<SwitchContextValue | null>(null);
