import { useState, useRef, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import { SliderContext } from "./SliderContext";

type SliderProps = {
    children: ReactNode;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
};

export function Slider({
    children,
    defaultValue = 50,
    min = 0,
    max = 100,
    step = 1,
    onChange,
}: SliderProps) {
    const [value, setValue] = useState(defaultValue);
    const trackRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const updateValue = useCallback(
        (clientX: number) => {
            if (!trackRef.current) return;
            const rect = trackRef.current.getBoundingClientRect();
            const percentage = Math.max(
                0,
                Math.min(1, (clientX - rect.left) / rect.width)
            );
            const rawValue = min + percentage * (max - min);
            const steppedValue = Math.round(rawValue / step) * step;
            const clampedValue = Math.max(min, Math.min(max, steppedValue));
            setValue(clampedValue);
            onChange?.(clampedValue);
        },
        [min, max, step, onChange]
    );

    // Handle mouse drag
    useEffect(() => {
        if (!isDragging) return;
        const handleMouseMove = (e: MouseEvent) => {
            updateValue(e.clientX);
        };
        const handleMouseUp = () => {
            setIsDragging(false);
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, updateValue]);

    // Handle keyboard
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (document.activeElement !== thumbRef.current) return;
            let newValue = value;
            if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                e.preventDefault();
                newValue = Math.min(max, value + step);
            } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                e.preventDefault();
                newValue = Math.max(min, value - step);
            } else if (e.key === "Home") {
                e.preventDefault();
                newValue = min;
            } else if (e.key === "End") {
                e.preventDefault();
                newValue = max;
            }
            if (newValue !== value) {
                setValue(newValue);
                onChange?.(newValue);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [value, min, max, step, onChange]);

    return (
        <SliderContext.Provider
            value={{ value, setValue, min, max, step, trackRef, thumbRef }}
        >
            <div
                onMouseDown={(e) => {
                    const target = e.target as HTMLElement;
                    // Allow dragging from track or thumb
                    if (
                        trackRef.current &&
                        (trackRef.current === target ||
                            trackRef.current.contains(target))
                    ) {
                        updateValue(e.clientX);
                        setIsDragging(true);
                    }
                }}
            >
                {children}
            </div>
        </SliderContext.Provider>
    );
}
