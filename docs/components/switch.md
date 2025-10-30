# Switch

A headless, accessible Switch (toggle) component for React with sensible default styles. Composed of multiple subcomponents for flexible usage.

## Features

- Accessible (keyboard navigation, ARIA attributes)
- Default styles included (fully customizable)
- Composable API (Switch, SwitchButton, SwitchLabel)
- Controlled and uncontrolled modes
- Context-powered hooks

## Installation

```bash
npm install react-headless-ui-kit
```

## Usage

```tsx
import {
  Switch,
  SwitchButton,
  SwitchLabel,
} from "react-headless-ui-kit";

// Simple usage with default styles
function ExampleSwitch() {
  return (
    <Switch>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <SwitchButton />
        <SwitchLabel>Enable notifications</SwitchLabel>
      </div>
    </Switch>
  );
}
```

## Controlled Mode

```tsx
function ControlledSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch checked={checked} onChange={setChecked}>
      <SwitchButton>{/* ... */}</SwitchButton>
    </Switch>
  );
}
```

## API Reference

### `<Switch />`

| Prop             | Type                      | Description                           |
|------------------|---------------------------|---------------------------------------|
| `children`       | `ReactNode`               | Switch content                        |
| `checked`        | `boolean`                 | Controlled checked state              |
| `defaultChecked` | `boolean`                 | Default checked state (uncontrolled)  |
| `onChange`       | `(checked: boolean) => void` | Callback when checked state changes |
| `disabled`       | `boolean`                 | Whether the switch is disabled        |

### `<SwitchButton />`

Button element representing the switch toggle. Includes default styles that can be overridden.

**Default Styles:**
- Width: 44px, Height: 24px
- Background: #10b981 (checked), #d1d5db (unchecked)
- Includes animated thumb element
- Opacity: 0.5 when disabled

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Custom thumb element (optional)   |
| `style`   | `CSSProperties` | Custom styles (merged with defaults) |

### `<SwitchLabel />`

Label for the switch. Clicking the label toggles the switch. Includes default cursor and opacity styles.

**Default Styles:**
- Cursor: pointer (not-allowed when disabled)
- User-select: none
- Opacity: 0.5 when disabled

### `useSwitch()`

Hook to access switch context values inside subcomponents.

| Return value | Description                  |
|--------------|------------------------------|
| `checked`    | Switch checked state         |
| `setChecked` | Setter for checked state     |
| `disabled`   | Whether switch is disabled   |
| `buttonRef`  | Ref to switch button element |

## Accessibility

- Uses `role="switch"` and `aria-checked` for screen readers.
- Supports keyboard navigation (<kbd>Space</kbd> and <kbd>Enter</kbd> toggle the switch).
- Supports disabled state.

## Customization

The component includes sensible default styles that work out of the box. You can customize by:

1. **Override with inline styles:**
```tsx
<SwitchButton style={{ width: "60px", background: "#3b82f6" }} />
```

2. **Use custom children with `useSwitch` hook:**
```tsx
import { useSwitch } from "react-headless-ui-kit";

function CustomThumb() {
  const { checked } = useSwitch();
  return (
    <span style={{
      position: "absolute",
      left: checked ? "32px" : "2px",
      transition: "left 0.2s ease",
      // ... other styles
    }} />
  );
}

<SwitchButton>
  <CustomThumb />
</SwitchButton>
```

3. **Use data attributes for conditional styling:**
```css
button[data-slot="switch-button"][data-checked="true"] {
  background: #10b981;
}
```
