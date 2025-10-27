import { createContext } from "react";

type TabsContextValue = {
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
    tabRefs: React.RefObject<HTMLButtonElement>[];
    panelRefs: React.RefObject<HTMLDivElement>[];
    registerTab: (ref: React.RefObject<HTMLButtonElement>) => number;
    registerPanel: (ref: React.RefObject<HTMLDivElement>) => number;
};

export const TabsContext = createContext<TabsContextValue | null>(null);
