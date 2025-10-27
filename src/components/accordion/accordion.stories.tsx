import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Accordion } from "./Accordion";
import { AccordionItem } from "./AccordionItem";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionPanel } from "./AccordionPanel";

const meta: Meta<typeof Accordion> = {
    title: "Components/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

const headerStyle: React.CSSProperties = {
    width: "100%",
    textAlign: "left",
    padding: "0.75rem 1rem",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    cursor: "pointer",
    fontWeight: 500,
};

const multiHeaderStyle: React.CSSProperties = {
    width: "100%",
    textAlign: "left",
    padding: "0.75rem 1rem",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    cursor: "pointer",
    fontWeight: 500,
};

const panelStyle: React.CSSProperties = {
    padding: "1rem",
    border: "1px solid #e5e7eb",
    borderTop: "none",
    background: "white",
    width: "100%",
    marginBottom: "0.2rem",
};

const itemStyle: React.CSSProperties = {
    width: "100%",
};

export const SingleOpen: Story = {
    render: () => (
        <div style={{ width: 400 }}>
            <Accordion>
                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="one">
                        <div style={headerStyle}>Section 1</div>
                    </AccordionHeader>
                    <AccordionPanel value="one">
                        <div style={panelStyle}>
                            <p>Content for section 1</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="two">
                        <div style={headerStyle}>Section 2</div>
                    </AccordionHeader>
                    <AccordionPanel value="two">
                        <div style={panelStyle}>
                            <p>Content for section 2</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="three">
                        <div style={headerStyle}>Section 3</div>
                    </AccordionHeader>
                    <AccordionPanel value="three">
                        <div style={panelStyle}>
                            <p>Content for section 3</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    ),
};

export const MultipleOpen: Story = {
    render: () => (
        <div style={{ width: 400 }}>
            <Accordion multiple defaultOpenItems={["one"]}>
                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="one">
                        <div style={multiHeaderStyle}>Section 1</div>
                    </AccordionHeader>
                    <AccordionPanel value="one">
                        <div style={panelStyle}>
                            <p>Content for section 1</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="two">
                        <div style={multiHeaderStyle}>Section 2</div>
                    </AccordionHeader>
                    <AccordionPanel value="two">
                        <div style={panelStyle}>
                            <p>Content for section 2</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="three">
                        <div style={multiHeaderStyle}> Section 3</div>
                    </AccordionHeader>
                    <AccordionPanel value="three">
                        <div style={panelStyle}>
                            <p>Content for section 3</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    ),
};
