// Popover.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { PopoverTrigger } from "./PopoverTrigger";
import { PopoverPanel } from "./PopoverPanel";

const meta: Meta<typeof Popover> = {
    title: "Components/Popover",
    component: Popover,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Popover>;

const liStyle = {
    padding: "0.25rem 0",
    borderBottom: "1px solid #eee",
};

export const CustomStyled: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger
                id="popover-trigger"
                style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    background: "#f9f9f9",
                    cursor: "pointer",
                }}
            >
                Open Popover
            </PopoverTrigger>
            <PopoverPanel
                style={{
                    marginTop: "1px",
                    background: "white",
                    border: "1px solid #ddd",
                    borderRadius: 4,
                    padding: "0.5rem",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    width: "150px",
                }}
            >
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    <li style={liStyle}>Profile</li>
                    <li style={liStyle}>Settings</li>
                    <li style={liStyle}>Logout</li>
                </ul>
            </PopoverPanel>
        </Popover>
    ),
};

export const Default: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger id="popover-trigger">Open Popover</PopoverTrigger>
            <PopoverPanel>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </PopoverPanel>
        </Popover>
    ),
};
