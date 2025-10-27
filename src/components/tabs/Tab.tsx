import { useRef, useEffect } from "react";
import { useTabs } from "./hooks/useTabs";

type TabProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    index: number;
    children: React.ReactNode;
};

export function Tab({ index, children, ...props }: TabProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const { selectedIndex, setSelectedIndex, tabRefs, registerTab } = useTabs();

    useEffect(() => {
        if (ref.current) {
            registerTab(ref as React.RefObject<HTMLButtonElement>);
        }
    }, []);

    // Keyboard navigation
    function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
        if (!tabRefs.length) return;
        if (e.key === "ArrowRight") {
            const next = (index + 1) % tabRefs.length;
            tabRefs[next]?.current?.focus();
            setSelectedIndex(next);
        } else if (e.key === "ArrowLeft") {
            const prev = (index - 1 + tabRefs.length) % tabRefs.length;
            tabRefs[prev]?.current?.focus();
            setSelectedIndex(prev);
        }
    }

    return (
        <button
            {...props}
            ref={ref}
            role="tab"
            aria-selected={selectedIndex === index}
            aria-controls={`tab-panel-${index}`}
            id={`tab-${index}`}
            tabIndex={selectedIndex === index ? 0 : -1}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={handleKeyDown}
            data-slot="tab"
        >
            {children}
        </button>
    );
}
