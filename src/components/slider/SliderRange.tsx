import { useSlider } from "./hooks/useSlider";

export function SliderRange({
    style,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { value, min, max } = useSlider();
    const percentage = ((value - min) / (max - min)) * 100;

    const defaultStyle: React.CSSProperties = {
        position: "absolute",
        width: `${percentage}%`,
        height: "100%",
        background: "#3b82f6",
        borderRadius: "4px",
    };

    return (
        <div
            {...props}
            data-slot="slider-range"
            style={{ ...defaultStyle, ...style }}
        />
    );
}
