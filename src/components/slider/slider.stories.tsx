import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { SliderTrack } from "./SliderTrack";
import { SliderThumb } from "./SliderThumb";
import { SliderRange } from "./SliderRange";

const meta: Meta<typeof Slider> = {
    title: "Components/Slider",
    component: Slider,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    render: () => (
        <div style={{ width: "300px", padding: "2rem" }}>
            <Slider defaultValue={50} min={0} max={100} step={5}>
                <SliderTrack>
                    <SliderRange />
                    <SliderThumb />
                </SliderTrack>
            </Slider>
        </div>
    ),
};

export const CustomStyled: Story = {
    render: () => (
        <div style={{ width: "300px", padding: "2rem" }}>
            <Slider defaultValue={30} min={0} max={100} step={1}>
                <SliderTrack
                    style={{
                        background: "#f3f4f6",
                        height: "12px",
                    }}
                >
                    <SliderRange
                        style={{
                            background:
                                "linear-gradient(to right, #8b5cf6, #ec4899)",
                        }}
                    />
                    <SliderThumb
                        style={{
                            width: "24px",
                            height: "24px",
                            border: "3px solid #8b5cf6",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        }}
                    />
                </SliderTrack>
            </Slider>
        </div>
    ),
};

export const WithSteps: Story = {
    render: () => (
        <div style={{ width: "300px", padding: "2rem" }}>
            <Slider defaultValue={25} min={0} max={100} step={25}>
                <SliderTrack
                    style={{
                        height: "8px",
                        background: "#e5e7eb",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    <SliderRange
                        style={{
                            height: "100%",
                            background: "#10b981",
                            borderRadius: "4px",
                        }}
                    />
                    <SliderThumb
                        style={{
                            width: "20px",
                            height: "20px",
                            background: "white",
                            border: "2px solid #10b981",
                            borderRadius: "50%",
                            cursor: "grab",
                            top: "50%",
                            marginTop: "-10px",
                        }}
                    />
                </SliderTrack>
            </Slider>
        </div>
    ),
};
