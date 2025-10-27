import { useState, useRef } from "react";
import type { ReactNode } from "react";
import { TabsContext } from "./TabsContext";

type TabsProps = {
    children: ReactNode;
    defaultIndex?: number;
};

export function Tabs({ children, defaultIndex = 0 }: TabsProps) {
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
    const tabRefs = useRef<React.RefObject<HTMLButtonElement>[]>([]);
    const panelRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

    // Register tab and panel refs for keyboard navigation
    function registerTab(ref: React.RefObject<HTMLButtonElement>) {
        tabRefs.current.push(ref);
        return tabRefs.current.length - 1;
    }
    function registerPanel(ref: React.RefObject<HTMLDivElement>) {
        panelRefs.current.push(ref);
        return panelRefs.current.length - 1;
    }

    return (
        <TabsContext.Provider
            value={{
                selectedIndex,
                setSelectedIndex,
                tabRefs: tabRefs.current,
                panelRefs: panelRefs.current,
                registerTab,
                registerPanel,
            }}
        >
            {children}
        </TabsContext.Provider>
    );
}
