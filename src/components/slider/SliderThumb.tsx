import { useSlider } from "./hooks/useSlider";

export function SliderThumb({
    style,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { value, min, max, thumbRef } = useSlider();
    const percentage = ((value - min) / (max - min)) * 100;

    const defaultStyle: React.CSSProperties = {
        position: "absolute",
        left: `${percentage}%`,
        transform: "translateX(-50%)",
        width: "20px",
        height: "20px",
        background: "white",
        border: "2px solid #3b82f6",
        borderRadius: "50%",
        cursor: "grab",
        marginTop: "-10px",
    };

    return (
        <div
            {...props}
            ref={thumbRef}
            role="slider"
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            tabIndex={0}
            data-slot="slider-thumb"
            style={{ ...defaultStyle, ...style }}
        />
    );
}
