import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsPanel, Tab, useTabs } from "./index";

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

function StyledTabs() {
    const tabStyle = {
        padding: "0.5rem 1.5rem",
        border: "none",
        borderBottom: "2px solid transparent",
        background: "none",
        cursor: "pointer",
        fontWeight: 500,
        fontSize: "1rem",
        transition: "color 0.2s, border-color 0.2s",
        color: "#555",
    };
    const activeTabStyle = {
        ...tabStyle,
        color: "#007bff",
        borderBottom: "2px solid #007bff",
        background: "#f5faff",
    };

    const { selectedIndex } = useTabs();

    return (
        <TabsList
            style={{
                display: "flex",
                gap: "0.5rem",
                marginBottom: "1.5rem",
                borderBottom: "1px solid #eee",
                background: "#fff",
                borderRadius: "6px 6px 0 0",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                width: "fit-content",
            }}
        >
            {[0, 1, 2].map((i) => (
                <Tab
                    key={i}
                    index={i}
                    style={selectedIndex === i ? activeTabStyle : tabStyle}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#0056b3")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.color =
                            selectedIndex === i ? "#007bff" : "#555")
                    }
                >
                    {["Tab One", "Tab Two", "Tab Three"][i]}
                </Tab>
            ))}
        </TabsList>
    );
}

const tabPanelStyle = {
    width: "400px",
    background: "#f0f4fa",
    height: "100px",
};

export const CustomStyled: Story = {
    render: () => (
        <Tabs defaultIndex={0}>
            <StyledTabs />
            <TabsPanel index={0} style={tabPanelStyle}>
                <div
                    style={{
                        padding: "1rem",
                        background: "#f5faff",
                        borderRadius: 6,
                    }}
                >
                    <h3 style={{ margin: "0 0 0.5rem 0", color: "#007bff" }}>
                        Tab One
                    </h3>
                    <p>
                        This is the content for Tab One. You can put anything
                        here.
                    </p>
                </div>
            </TabsPanel>
            <TabsPanel index={1} style={tabPanelStyle}>
                <div
                    style={{
                        padding: "1rem",
                        background: "#f5faff",
                        borderRadius: 6,
                    }}
                >
                    <h3 style={{ margin: "0 0 0.5rem 0", color: "#007bff" }}>
                        Tab Two
                    </h3>
                    <p>This is the content for Tab Two. Try switching tabs!</p>
                </div>
            </TabsPanel>
            <TabsPanel index={2} style={tabPanelStyle}>
                <div
                    style={{
                        padding: "1rem",
                        background: "#f5faff",
                        borderRadius: 6,
                    }}
                >
                    <h3 style={{ margin: "0 0 0.5rem 0", color: "#007bff" }}>
                        Tab Three
                    </h3>
                    <p>
                        This is the content for Tab Three. Tabs are fully
                        customizable.
                    </p>
                </div>
            </TabsPanel>
        </Tabs>
    ),
};

function DefaultTabs() {
    return (
        <TabsList>
            {[0, 1, 2].map((i) => (
                <Tab key={i} index={i}>
                    {["Tab One", "Tab Two", "Tab Three"][i]}
                </Tab>
            ))}
        </TabsList>
    );
}

export const Default: Story = {
    render: () => (
        <Tabs defaultIndex={0}>
            <DefaultTabs />
            <TabsPanel index={0}>
                <div>
                    <h3>Tab One</h3>
                    <p>
                        This is the content for Tab One. You can put anything
                        here.
                    </p>
                </div>
            </TabsPanel>
            <TabsPanel index={1}>
                <div>
                    <h3>Tab Two</h3>
                    <p>This is the content for Tab Two. Try switching tabs!</p>
                </div>
            </TabsPanel>
            <TabsPanel index={2}>
                <div>
                    <h3>Tab Three</h3>
                    <p>
                        This is the content for Tab Three. Tabs are fully
                        customizable.
                    </p>
                </div>
            </TabsPanel>
        </Tabs>
    ),
};
