import { useContext } from "react";
import { SliderContext } from "../SliderContext";

export function useSlider() {
    const ctx = useContext(SliderContext);
    if (!ctx)
        throw new Error("Slider subcomponents must be used inside <Slider>");
    const { value, setValue, min, max, step, trackRef, thumbRef } = ctx;
    return { value, setValue, min, max, step, trackRef, thumbRef };
}
