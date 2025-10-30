# ComboBox

A headless, accessible ComboBox component for React. Supports multiple input types including text, textarea, date, select, and multi-select. Composed of multiple subcomponents for flexible usage.

## Features

- Accessible (keyboard navigation, ARIA attributes)
- Headless (no styles, fully customizable)
- Multiple input types (text, textarea, date, select, multi-select)
- Composable API (ComboBox, ComboBoxInput, ComboBoxOptions, ComboBoxOption)
- Context-powered hooks
- Controlled and uncontrolled modes

## Installation

```bash
npm install react-headless-ui-kit
```

## Usage

### Text Input with Options

```tsx
import {
  ComboBox,
  ComboBoxInput,
  ComboBoxOptions,
  ComboBoxOption,
} from "react-headless-ui-kit";

function SearchComboBox() {
  return (
    <ComboBox>
      <ComboBoxInput
        type="text"
        placeholder="Search..."
        style={{
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: 4,
        }}
      />
      <ComboBoxOptions
        style={{
          marginTop: "4px",
          background: "white",
          border: "1px solid #ddd",
          borderRadius: 4,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <ComboBoxOption value="option1">Option 1</ComboBoxOption>
        <ComboBoxOption value="option2">Option 2</ComboBoxOption>
        <ComboBoxOption value="option3">Option 3</ComboBoxOption>
      </ComboBoxOptions>
    </ComboBox>
  );
}
```

### TextArea

```tsx
<ComboBox>
  <ComboBoxInput
    type="textarea"
    placeholder="Enter message..."
    style={{ width: "300px", minHeight: "100px" }}
  />
</ComboBox>
```

### Date Input

```tsx
<ComboBox>
  <ComboBoxInput type="date" />
</ComboBox>
```

### Select

```tsx
<ComboBox>
  <ComboBoxInput type="select">
    <option value="">Select...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </ComboBoxInput>
</ComboBox>
```

### Multi-Select

```tsx
<ComboBox multiple>
    <ComboBoxInput
        type="text"
        placeholder="Select colors..."
        style={{
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: 4,
            width: "200px",
        }}
    />
    <ComboBoxOptions
        style={{
            marginTop: "4px",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: 4,
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
    >
        <ComboBoxOption value="red" style={optionStyle}>
            🔴 Red
        </ComboBoxOption>
        <ComboBoxOption value="blue" style={optionStyle}>
            🔵 Blue
        </ComboBoxOption>
        <ComboBoxOption value="green" style={optionStyle}>
            🟢 Green
        </ComboBoxOption>
        <ComboBoxOption value="yellow" style={optionStyle}>
            🟡 Yellow
        </ComboBoxOption>
    </ComboBoxOptions>
</ComboBox>
```

### Controlled Component

```tsx
function ControlledComboBox() {
  const [value, setValue] = useState("");

  return (
    <ComboBox value={value} onChange={setValue}>
      <ComboBoxInput type="text" placeholder="Controlled input..." />
      <ComboBoxOptions>
        <ComboBoxOption value="a">Option A</ComboBoxOption>
        <ComboBoxOption value="b">Option B</ComboBoxOption>
      </ComboBoxOptions>
    </ComboBox>
  );
}
```

## API Reference

### `<ComboBox />`

| Prop       | Type                        | Default | Description                          |
|------------|-----------------------------|---------|--------------------------------------|
| `children` | `ReactNode`                 | -       | ComboBox content                     |
| `value`    | `string \| string[]`        | -       | Controlled value                     |
| `onChange` | `(value: string \| string[]) => void` | -  | Change handler           |
| `multiple` | `boolean`                   | `false` | Enable multi-select mode             |

### `<ComboBoxInput />`

Input component supporting multiple types.

| Prop          | Type                                              | Default  | Description                    |
|---------------|---------------------------------------------------|----------|--------------------------------|
| `type`        | `"text" \| "textarea" \| "date" \| "select" \| "email" \| "number" \| "password"` | `"text"` | Input type |
| `placeholder` | `string`                                          | -        | Placeholder text               |
| `...props`    | Input/Textarea/Select props                       | -        | Native element props           |

### `<ComboBoxOptions />`

Container for option items.

| Prop       | Type         | Description              |
|------------|--------------|--------------------------|
| `children` | `ReactNode`  | Option components        |
| `...props` | Div props    | Native div props         |

### `<ComboBoxOption />`

Individual selectable option.

| Prop       | Type         | Description                    |
|------------|--------------|--------------------------------|
| `value`    | `string`     | Option value                   |
| `children` | `ReactNode`  | Option content                 |
| `...props` | Div props    | Native div props               |

### `useComboBox()`

Hook to access combobox context values inside subcomponents.

| Return value | Description                      |
|--------------|----------------------------------|
| `open`       | Options panel open state         |
| `setOpen`    | Setter for open state            |
| `value`      | Current value(s)                 |
| `setValue`   | Setter for value                 |
| `inputRef`   | Ref to input element             |
| `optionsRef` | Ref to options panel             |
| `multiple`   | Multi-select mode flag           |

## Accessibility

- Pressing <kbd>Escape</kbd> closes the options panel.
- ARIA attributes are set for screen readers (`aria-haspopup`, `aria-expanded`, `role="listbox"`, `role="option"`).
- Click outside closes the options panel.
- Selected options have `aria-selected` attribute.

## Customization

All components are unstyled. Use your own styles via `className` or `style` props.
