import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";
import { MenuButton } from "./MenuButton";
import { MenuItems } from "./MenuItems";
import { MenuItem } from "./MenuItem";

const meta: Meta<typeof Menu> = {
    title: "Components/Menu",
    component: Menu,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Menu>;

const menuItemStyle = {
    display: "block",
    width: "100%",
    padding: "0.5rem 1rem",
    border: "none",
    background: "transparent",
    textAlign: "left" as const,
    cursor: "pointer",
};

export const CustomStyled: Story = {
    render: () => (
        <Menu>
            <MenuButton
                id="menu-button"
                style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    background: "#f9f9f9",
                    cursor: "pointer",
                }}
            >
                Options ▼
            </MenuButton>
            <MenuItems
                style={{
                    marginTop: "4px",
                    background: "white",
                    border: "1px solid #ddd",
                    borderRadius: 4,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    minWidth: "150px",
                }}
            >
                <MenuItem
                    style={menuItemStyle}
                    onClick={() => console.log("Profile clicked")}
                >
                    Profile
                </MenuItem>
                <MenuItem
                    style={menuItemStyle}
                    onClick={() => console.log("Settings clicked")}
                >
                    Settings
                </MenuItem>
                <MenuItem
                    style={{
                        ...menuItemStyle,
                        borderTop: "1px solid #eee",
                        color: "#dc2626",
                    }}
                    onClick={() => console.log("Logout clicked")}
                >
                    Logout
                </MenuItem>
            </MenuItems>
        </Menu>
    ),
};

export const Default: Story = {
    render: () => (
        <Menu>
            <MenuButton id="menu-button">Options</MenuButton>
            <MenuItems>
                <MenuItem onClick={() => console.log("Profile clicked")}>
                    Profile
                </MenuItem>
                <MenuItem onClick={() => console.log("Settings clicked")}>
                    Settings
                </MenuItem>
                <MenuItem onClick={() => console.log("Logout clicked")}>
                    Logout
                </MenuItem>
            </MenuItems>
        </Menu>
    ),
};
