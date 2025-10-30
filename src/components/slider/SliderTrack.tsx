import { useSlider } from "./hooks/useSlider";

export function SliderTrack({
    children,
    style,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { trackRef } = useSlider();

    const defaultStyle: React.CSSProperties = {
        position: "relative",
        height: "8px",
        background: "#e5e7eb",
        borderRadius: "4px",
        cursor: "pointer",
    };

    return (
        <div
            {...props}
            ref={trackRef}
            data-slot="slider-track"
            style={{ ...defaultStyle, ...style }}
        >
            {children}
        </div>
    );
}
