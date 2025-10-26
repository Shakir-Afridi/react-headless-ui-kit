# Popover

A headless, accessible Popover component for React. Composed of multiple subcomponents for flexible usage.

## Features

- Accessible (keyboard navigation, ARIA attributes)
- Headless (no styles, fully customizable)
- Composable API (Popover, PopoverTrigger, PopoverPanel)
- Context-powered hooks

## Installation

```bash
npm install react-headless-ui-kit
```

## Usage

```tsx
import {
  Popover,
  PopoverTrigger,
  PopoverPanel,
  usePopover,
} from "react-headless-ui-kit";

function ExamplePopover() {
  return (
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
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </PopoverPanel>
    </Popover>
  );
}
```

## API Reference

### `<Popover />`

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Popover content                   |

### `<PopoverTrigger />`

Button to open/close the popover.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Trigger content                   |

### `<PopoverPanel />`

Popover panel container. Handles ARIA attributes and visibility.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Panel content                     |

### `usePopover()`

Hook to access popover context values inside subcomponents.

| Return value | Description           |
|--------------|----------------------|
| `open`       | Popover open state   |
| `setOpen`    | Setter for open      |
| `triggerRef` | Ref to trigger button|
| `panelRef`   | Ref to panel element |

## Accessibility

- Pressing <kbd>Escape</kbd> closes the popover.
- ARIA attributes are set for screen readers.
- Click outside closes the popover.

## Customization

All components are unstyled. Use your own styles via `className` or `style` props.

