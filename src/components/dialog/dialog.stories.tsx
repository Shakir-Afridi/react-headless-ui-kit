import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
    Dialog,
    DialogOverlay,
    DialogContent,
    DialogTitle,
    DialogActions,
    useDialog,
} from "./index";

const meta: Meta<typeof Dialog> = {
    title: "Components/Dialog",
    component: Dialog,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        function DialogInner() {
            const { onClose } = useDialog();

            return (
                <DialogOverlay
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)",
                        display: "grid",
                        placeItems: "center",
                    }}
                >
                    <DialogContent
                        style={{
                            background: "white",
                            padding: "1rem",
                            borderRadius: 8,
                            maxWidth: 400,
                            width: "100%",
                        }}
                    >
                        <DialogTitle>Hook-powered Dialog</DialogTitle>
                        <DialogContent>
                            This dialog uses <code>useDialog()</code> to access
                            context values.
                        </DialogContent>
                        <DialogActions
                            style={{ marginTop: 16, display: "flex", gap: 8 }}
                        >
                            <button
                                style={{
                                    padding: "0.5rem 1rem",
                                    border: "1px solid #ccc",
                                    borderRadius: 4,
                                    background: "#f0f0f0",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    alert("Confirmed!");
                                    onClose();
                                }}
                            >
                                Confirm
                            </button>
                            <button
                                style={{
                                    padding: "0.5rem 1rem",
                                    border: "1px solid #ccc",
                                    borderRadius: 4,
                                    background: "#f9f9f9",
                                    cursor: "pointer",
                                }}
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </DialogActions>
                    </DialogContent>
                </DialogOverlay>
            );
        }

        return (
            <div>
                <button
                    style={{
                        padding: "0.5rem 1rem",
                        border: "1px solid #ccc",
                        borderRadius: 4,
                        background: "#f9f9f9",
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen(true)}
                >
                    Open dialog
                </button>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogInner />
                </Dialog>
            </div>
        );
    },
};
