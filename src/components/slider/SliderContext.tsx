import { createContext } from "react";

type SliderContextValue = {
    value: number;
    setValue: (value: number) => void;
    min: number;
    max: number;
    step: number;
    trackRef: React.RefObject<HTMLDivElement | null>;
    thumbRef: React.RefObject<HTMLDivElement | null>;
};

export const SliderContext = createContext<SliderContextValue | null>(null);
