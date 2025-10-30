import { createContext } from "react";

type ComboBoxContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    value: string | string[];
    setValue: (value: string | string[]) => void;
    inputRef: React.RefObject<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null
    >;
    optionsRef: React.RefObject<HTMLDivElement | null>;
    multiple: boolean;
};

export const ComboBoxContext = createContext<ComboBoxContextValue | null>(null);
