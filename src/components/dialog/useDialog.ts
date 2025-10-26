// useDialog.ts
import { useContext } from "react";
import { DialogContext } from "./dialogContext"; // export DialogContext from Dialog.tsx

export function useDialog() {
    const ctx = useContext(DialogContext);
    if (!ctx) {
        throw new Error("useDialog must be used within a <Dialog>");
    }

    const { open, onClose, onOpen, titleId, descriptionId } = ctx;

    return {
        open,
        onClose,
        onOpen,
        titleId,
        descriptionId,
    };
}
