# Dialog

A fully accessible, headless Dialog (modal) component for React. Composed of multiple subcomponents for flexible usage.

## Features

- Accessible (focus trap, keyboard navigation, ARIA attributes)
- Headless (no styles, fully customizable)
- Composable API (Dialog, DialogOverlay, DialogContent, DialogTitle, DialogActions)
- Context-powered hooks

## Installation

```bash
npm install react-headless-ui-kit
```

## Usage

```tsx
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogActions,
  useDialog,
} from "react-headless-ui-kit";

function ExampleDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open dialog</button>
      <Dialog open={open} onClose={() => setOpen(false)}>
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
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogContent>
              Dialog body content goes here.
            </DialogContent>
            <DialogActions
              style={{ marginTop: 16, display: "flex", gap: 8 }}
            >
              <button onClick={() => setOpen(false)}>Close</button>
            </DialogActions>
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </>
  );
}
```

## API Reference

### `<Dialog />`

| Prop      | Type                 | Description                       |
|-----------|----------------------|-----------------------------------|
| `open`    | `boolean`            | Whether the dialog is open        |
| `onClose` | `() => void`         | Callback to close the dialog      |
| `children`| `ReactNode`          | Dialog content                    |
| `container`| `Element \| null`   | Portal target (default: `body`)   |

### `<DialogOverlay />`

Wraps the dialog content and handles click outside to close.

| Prop      | Type                 | Description                       |
|-----------|----------------------|-----------------------------------|
| `children`| `ReactNode`          | Overlay content                   |

### `<DialogContent />`

Main dialog content container. Handles focus management and ARIA attributes.

| Prop      | Type                 | Description                       |
|-----------|----------------------|-----------------------------------|
| `children`| `ReactNode`          | Dialog content                    |

### `<DialogTitle />`

Dialog title, linked via `aria-labelledby`.

| Prop      | Type                 | Description                       |
|-----------|----------------------|-----------------------------------|
| `children`| `ReactNode`          | Title text                        |

### `<DialogActions />`

Container for dialog action buttons.

| Prop      | Type                 | Description                       |
|-----------|----------------------|-----------------------------------|
| `children`| `ReactNode`          | Action buttons                    |

### `useDialog()`

Hook to access dialog context values inside subcomponents.

| Return value | Description           |
|--------------|----------------------|
| `onClose`    | Close callback       |
| `onOpen`     | Open callback        |
| `open`       | Dialog open state    |
| `titleId`    | ARIA title id        |
| `descriptionId` | ARIA description id |

## Accessibility

- Focus is trapped inside the dialog when open.
- Pressing <kbd>Escape</kbd> closes the dialog.
- ARIA attributes are set for screen readers.

## Customization

All components are unstyled. Use your own styles via `className` or `style` props.

