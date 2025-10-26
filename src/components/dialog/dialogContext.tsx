import { useContext, createContext } from "react";

type DialogContextValue = {
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
    titleId: string;
    descriptionId: string;
};

export const DialogContext = createContext<DialogContextValue | null>(null);

export function useDialogContext() {
    const ctx = useContext(DialogContext);
    if (!ctx)
        throw new Error("Dialog subcomponents must be used inside <Dialog>");
    return ctx;
}
