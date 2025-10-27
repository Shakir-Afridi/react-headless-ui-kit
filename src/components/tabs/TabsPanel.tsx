import { useRef, useEffect } from "react";
import { useTabs } from "./hooks/useTabs";

type TabsPanelProps = React.HTMLAttributes<HTMLDivElement> & {
    index: number;
    children: React.ReactNode;
};

export function TabsPanel({ index, children, ...props }: TabsPanelProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { selectedIndex, registerPanel } = useTabs();

    useEffect(() => {
        registerPanel(ref as React.RefObject<HTMLDivElement>);
    }, []);

    if (selectedIndex !== index) return null;

    return (
        <div
            {...props}
            ref={ref}
            role="tabpanel"
            id={`tab-panel-${index}`}
            aria-labelledby={`tab-${index}`}
            tabIndex={0}
            data-slot="tabs-panel"
        >
            {children}
        </div>
    );
}
