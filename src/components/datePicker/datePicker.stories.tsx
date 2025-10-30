import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";
import { DatePickerTrigger } from "./DatePickerTrigger";
import { DatePickerPanel } from "./DatePickerPanel";

const meta: Meta<typeof DatePicker> = {
    title: "Components/DatePicker",
    component: DatePicker,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
    render: () => <DatePicker placeholder="Select a date" />,
};

export const WithDefaultDate: Story = {
    render: () => (
        <DatePicker placeholder="Select a date" defaultDate={new Date()} />
    ),
};

export const CustomStyled: Story = {
    render: () => (
        <DatePicker
            custom
            onDateChange={(date) => console.log("Selected:", date)}
        >
            <DatePickerTrigger
                placeholder="Select a date"
                style={{
                    width: "250px",
                    padding: "0.5rem",
                    border: "1px solid #93c5fd",
                    borderRadius: "6px",
                    fontSize: "14px",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    outline: "none",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                }}
            />
            <DatePickerPanel />
        </DatePicker>
    ),
};
