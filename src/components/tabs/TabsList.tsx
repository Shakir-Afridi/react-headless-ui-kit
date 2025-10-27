import type { ReactNode } from "react";

export function TabsList({
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div role="tablist" {...props} data-slot="tabs-list">
            {children}
        </div>
    );
}
