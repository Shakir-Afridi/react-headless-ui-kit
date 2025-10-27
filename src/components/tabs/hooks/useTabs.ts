import { useContext } from "react";
import { TabsContext } from "../TabsContext";

export function useTabs() {
    const ctx = useContext(TabsContext);
    if (!ctx) throw new Error("useTabs must be used within <Tabs />");
    return ctx;
}
