import type { Meta, StoryObj } from "@storybook/react";
import { ComboBox } from "./ComboBox";
import { ComboBoxInput } from "./ComboBoxInput";
import { ComboBoxOptions } from "./ComboBoxOptions";
import { ComboBoxOption } from "./ComboBoxOption";

const meta: Meta<typeof ComboBox> = {
    title: "Components/ComboBox",
    component: ComboBox,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof ComboBox>;

const optionStyle = {
    padding: "0.5rem 1rem",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
};

export const TextInput: Story = {
    render: () => (
        <ComboBox>
            <ComboBoxInput
                type="text"
                placeholder="Search countries..."
                style={{
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    width: "200px",
                }}
            />
        </ComboBox>
    ),
};

export const TextArea: Story = {
    render: () => (
        <ComboBox>
            <ComboBoxInput
                type="textarea"
                placeholder="Enter your message..."
                style={{
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    width: "300px",
                    minHeight: "100px",
                    resize: "vertical",
                }}
            />
        </ComboBox>
    ),
};

export const DateInput: Story = {
    render: () => (
        <ComboBox>
            <ComboBoxInput
                type="date"
                style={{
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    width: "200px",
                }}
            />
        </ComboBox>
    ),
};

export const Select: Story = {
    render: () => (
        <ComboBox>
            <ComboBoxInput
                type="select"
                style={{
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    width: "200px",
                }}
            >
                <option value="">Select a fruit...</option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="grape">Grape</option>
            </ComboBoxInput>
        </ComboBox>
    ),
};

export const MultiSelectWithOptions: Story = {
    render: () => (
        <ComboBox multiple>
            <ComboBoxInput
                type="text"
                placeholder="Select colors..."
                style={{
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    width: "200px",
                }}
            />
            <ComboBoxOptions
                style={{
                    marginTop: "4px",
                    background: "white",
                    border: "1px solid #ddd",
                    borderRadius: 4,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
            >
                <ComboBoxOption value="red" style={optionStyle}>
                    🔴 Red
                </ComboBoxOption>
                <ComboBoxOption value="blue" style={optionStyle}>
                    🔵 Blue
                </ComboBoxOption>
                <ComboBoxOption value="green" style={optionStyle}>
                    🟢 Green
                </ComboBoxOption>
                <ComboBoxOption value="yellow" style={optionStyle}>
                    🟡 Yellow
                </ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    ),
};
