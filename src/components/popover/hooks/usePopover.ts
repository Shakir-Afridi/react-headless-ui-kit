// usePopover.ts
import { useContext } from "react";
import { PopoverContext } from "../PopoverContext";

export function usePopover() {
    const ctx = useContext(PopoverContext);
    if (!ctx)
        throw new Error("Popover subcomponents must be used inside <Popover>");
    const { open, setOpen, triggerRef, panelRef } = ctx;
    return { open, setOpen, triggerRef, panelRef };
}
