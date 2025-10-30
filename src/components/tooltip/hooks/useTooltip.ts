import { useContext } from "react";
import { TooltipContext } from "../TooltipContext";

export function useTooltip() {
    const ctx = useContext(TooltipContext);
    if (!ctx)
        throw new Error("Tooltip subcomponents must be used inside <Tooltip>");
    const { open, setOpen, triggerRef, contentRef } = ctx;
    return { open, setOpen, triggerRef, contentRef };
}
