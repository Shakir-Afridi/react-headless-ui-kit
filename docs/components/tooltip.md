# Tooltip

A headless, accessible Tooltip component for React. Composed of multiple subcomponents for flexible usage.

## Features

- Accessible (keyboard navigation, ARIA attributes)
- Headless (no styles, fully customizable)
- Composable API (Tooltip, TooltipTrigger, TooltipContent)
- Context-powered hooks
- Configurable delay
- Hover and focus support

## Installation

```bash
npm install react-headless-ui-kit
```

## Usage

```tsx
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  useTooltip,
} from "react-headless-ui-kit";

function ExampleTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <button
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid #ccc",
            borderRadius: 4,
            background: "#f9f9f9",
            cursor: "pointer",
          }}
        >
          Hover me
        </button>
      </TooltipTrigger>
      <TooltipContent
        style={{
          top: "calc(100% + 8px)",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#333",
          color: "white",
          padding: "0.5rem 0.75rem",
          borderRadius: 4,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
        }}
      >
        This is a tooltip
      </TooltipContent>
    </Tooltip>
  );
}
```

## API Reference

### `<Tooltip />`

| Prop      | Type         | Default | Description                       |
|-----------|--------------|---------|-----------------------------------|
| `children`| `ReactNode`  | -       | Tooltip content                   |
| `delay`   | `number`     | `200`   | Delay in ms before showing tooltip|

### `<TooltipTrigger />`

Element that triggers the tooltip on hover/focus.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Trigger content                   |

### `<TooltipContent />`

Tooltip content container. Handles ARIA attributes and visibility.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Content to display                |

### `useTooltip()`

Hook to access tooltip context values inside subcomponents.

| Return value | Description           |
|--------------|----------------------|
| `open`       | Tooltip open state   |
| `setOpen`    | Setter for open      |
| `triggerRef` | Ref to trigger element|
| `contentRef` | Ref to content element|

## Accessibility

- Pressing <kbd>Escape</kbd> closes the tooltip.
- ARIA attributes are set for screen readers.
- Works with both mouse hover and keyboard focus.
- Mouse leave or blur closes the tooltip.

## Customization

All components are unstyled. Use your own styles via `className` or `style` props. Position the tooltip content using CSS positioning (top, bottom, left, right, transform).

## Positioning

You control positioning through inline styles or CSS classes. Common patterns:

```tsx
// Top
<TooltipContent style={{ bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" }}>

// Bottom
<TooltipContent style={{ top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" }}>

// Left
<TooltipContent style={{ right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" }}>

// Right
<TooltipContent style={{ left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" }}>
