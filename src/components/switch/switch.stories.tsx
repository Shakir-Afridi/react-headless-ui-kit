import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch } from "./Switch";
import { SwitchButton } from "./SwitchButton";
import { SwitchLabel } from "./SwitchLabel";
import { useSwitch } from "./hooks/useSwitch";

const meta: Meta<typeof Switch> = {
    title: "Components/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    render: () => (
        <Switch>
            <SwitchButton />
        </Switch>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <Switch>
            <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
                <SwitchButton />
                <SwitchLabel>Enable notifications</SwitchLabel>
            </div>
        </Switch>
    ),
};

export const CustomStyled: Story = {
    render: () => {
        const CustomThumb = () => {
            const { checked } = useSwitch();
            return (
                <span
                    style={{
                        position: "absolute",
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        background: "white",
                        top: "2px",
                        left: checked ? "32px" : "2px",
                        transition: "left 0.2s ease",
                    }}
                />
            );
        };

        return (
            <Switch defaultChecked>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                >
                    <SwitchButton
                        style={{
                            width: "60px",
                            height: "30px",
                            borderRadius: "15px",
                            background: "#3b82f6",
                        }}
                    >
                        <CustomThumb />
                    </SwitchButton>
                    <SwitchLabel style={{ fontSize: "14px", fontWeight: 500 }}>
                        Custom styled switch
                    </SwitchLabel>
                </div>
            </Switch>
        );
    },
};

export const Controlled: Story = {
    render: () => {
        const ControlledExample = () => {
            const [checked, setChecked] = useState(false);
            return (
                <div>
                    <Switch checked={checked} onChange={setChecked}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <SwitchButton />
                            <SwitchLabel>Controlled switch</SwitchLabel>
                        </div>
                    </Switch>
                    <p style={{ marginTop: "1rem" }}>
                        State: {checked ? "ON" : "OFF"}
                    </p>
                </div>
            );
        };
        return <ControlledExample />;
    },
};

export const Disabled: Story = {
    render: () => (
        <Switch disabled>
            <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
                <SwitchButton />
                <SwitchLabel>Disabled switch</SwitchLabel>
            </div>
        </Switch>
    ),
};

export const DefaultChecked: Story = {
    render: () => (
        <Switch defaultChecked>
            <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
                <SwitchButton />
                <SwitchLabel>Default checked</SwitchLabel>
            </div>
        </Switch>
    ),
};
