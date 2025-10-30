import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { TooltipTrigger } from "./TooltipTrigger";
import { TooltipContent } from "./TooltipContent";

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger>
                <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent>This is a tooltip</TooltipContent>
        </Tooltip>
    ),
};

export const CustomStyled: Story = {
    render: () => (
        <Tooltip delay={300}>
            <TooltipTrigger>
                <span
                    style={{
                        textDecoration: "underline",
                        textDecorationStyle: "dotted",
                        cursor: "help",
                    }}
                >
                    Hover for info
                </span>
            </TooltipTrigger>
            <TooltipContent
                style={{
                    top: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#1e40af",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: 8,
                    fontSize: "0.875rem",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    maxWidth: "200px",
                }}
            >
                This tooltip has custom styling and a longer delay
            </TooltipContent>
        </Tooltip>
    ),
};

export const TopPosition: Story = {
    render: () => (
        <div style={{ marginTop: "100px" }}>
            <Tooltip>
                <TooltipTrigger>
                    <button
                        style={{
                            padding: "0.5rem 1rem",
                            border: "1px solid #ccc",
                            borderRadius: 4,
                            background: "#f9f9f9",
                            cursor: "pointer",
                        }}
                    >
                        Hover me
                    </button>
                </TooltipTrigger>
                <TooltipContent
                    style={{
                        bottom: "calc(100% + 8px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#333",
                        color: "white",
                        padding: "0.5rem 0.75rem",
                        borderRadius: 4,
                        fontSize: "0.875rem",
                        whiteSpace: "nowrap",
                    }}
                >
                    Tooltip on top
                </TooltipContent>
            </Tooltip>
        </div>
    ),
};
