# DatePicker

A headless, accessible DatePicker component for React. Composed of multiple subcomponents for flexible usage.

## Features

- Accessible (keyboard navigation, ARIA attributes)
- Headless (minimal default styles, fully customizable)
- Composable API (DatePicker, DatePickerTrigger, DatePickerPanel)
- Context-powered hooks
- Built-in styled calendar UI or fully custom

## Installation

```bash
npm install react-headless-ui-kit
```

## Usage

### Basic Usage

```tsx
import { DatePicker } from "react-headless-ui-kit";

function ExampleDatePicker() {
  return (
    <DatePicker 
      placeholder="Select a date"
      onDateChange={(date) => console.log("Selected:", date)}
    />
  );
}
```

### Custom Styled Input

```tsx
import { DatePicker, DatePickerTrigger } from "react-headless-ui-kit";

function CustomDatePicker() {
  return (
    <DatePicker 
      customInput
      onDateChange={(date) => console.log("Selected:", date)}
    >
      <DatePickerTrigger
        placeholder="Select a date"
        style={{ 
          width: "250px",
          padding: "0.5rem",
          border: "1px solid #93c5fd",
          borderRadius: "6px"
        }}
      />
    </DatePicker>
  );
}
```

## API Reference

### `<DatePicker />`

| Prop           | Type                          | Description                       |
|----------------|-------------------------------|-----------------------------------|
| `children`     | `ReactNode`                   | Custom trigger or content (when using `customInput`) |
| `defaultDate`  | `Date \| null`                | Initial selected date             |
| `onDateChange` | `(date: Date \| null) => void`| Callback when date changes        |
| `placeholder`  | `string`                      | Placeholder text for default input |
| `width`        | `string`                      | Width of default input (e.g., "200px") |
| `customInput`  | `boolean`                     | If true, uses children as custom trigger |

### `<DatePickerTrigger />`

Input field with calendar icon to open/close the date picker.

| Prop          | Type         | Description                       |
|---------------|--------------|-----------------------------------|
| `placeholder` | `string`     | Placeholder text (default: "Select date") |
| `style`       | `CSSProperties` | Custom styles for the input    |

### `<DatePickerPanel />`

DatePicker panel container. Includes a default styled calendar UI or accepts custom children.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Custom panel content (optional)   |

### `useDatePicker()`

Hook to access date picker context values inside subcomponents.

| Return value    | Description              |
|-----------------|--------------------------|
| `open`          | DatePicker open state    |
| `setOpen`       | Setter for open          |
| `selectedDate`  | Currently selected date  |
| `setSelectedDate` | Setter for selected date |
| `triggerRef`    | Ref to trigger button    |
| `panelRef`      | Ref to panel element     |

## Accessibility

- Pressing <kbd>Escape</kbd> closes the date picker.
- ARIA attributes are set for screen readers.
- Click outside closes the date picker.
- Calendar navigation with keyboard support.

## Customization

The component provides a styled default calendar UI. You
