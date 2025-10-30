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

```tsx
import {
  DatePicker,
  DatePickerTrigger,
  DatePickerPanel,
  useDatePicker,
} from "react-headless-ui-kit";

function ExampleDatePicker() {
  return (
    <DatePicker onDateChange={(date) => console.log("Selected:", date)}>
      <DatePickerTrigger
        placeholder="Select a date"
        style={{ width: "250px" }}
      />
      <DatePickerPanel />
    </DatePicker>
  );
}
```

## API Reference

### `<DatePicker />`

| Prop           | Type                          | Description                       |
|----------------|-------------------------------|-----------------------------------|
| `children`     | `ReactNode`                   | DatePicker content                |
| `defaultDate`  | `Date \| null`                | Initial selected date             |
| `onDateChange` | `(date: Date \| null) => void`| Callback when date changes        |

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

The component provides a styled default calendar UI. Customize via `style` props or provide custom children to `DatePickerPanel`:

```tsx
<DatePickerPanel>
  <MyCustomCalendar />
</DatePickerPanel>
```
