# Slider

A headless, accessible Slider component for React. Composed of multiple subcomponents for flexible usage.

## Features

- Accessible (keyboard navigation, ARIA attributes)
- Headless with minimal default styles (fully customizable)
- Composable API (Slider, SliderTrack, SliderThumb, SliderRange)
- Context-powered hooks
- Mouse and keyboard support

## Installation

```bash
npm install react-headless-ui-kit
```

## Usage

```tsx
import {
  Slider,
  SliderTrack,
  SliderThumb,
  SliderRange,
  useSlider,
} from "react-headless-ui-kit";

// Minimal usage with default styles
function ExampleSlider() {
  return (
    <div style={{ width: "300px", padding: "2rem" }}>
      <Slider defaultValue={50} min={0} max={100} step={5}>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </div>
  );
}

// Custom styled slider
function CustomSlider() {
  return (
    <div style={{ width: "300px", padding: "2rem" }}>
      <Slider defaultValue={30} min={0} max={100} step={1}>
        <SliderTrack
          style={{
            height: "12px",
            background: "#f3f4f6",
          }}
        >
          <SliderRange
            style={{
              background: "linear-gradient(to right, #8b5cf6, #ec4899)",
            }}
          />
          <SliderThumb
            style={{
              width: "24px",
              height: "24px",
              border: "3px solid #8b5cf6",
            }}
          />
        </SliderTrack>
      </Slider>
    </div>
  );
}
```

## API Reference

### `<Slider />`

| Prop           | Type                       | Default | Description                    |
|----------------|----------------------------|---------|--------------------------------|
| `children`     | `ReactNode`                | -       | Slider content                 |
| `defaultValue` | `number`                   | `50`    | Initial slider value           |
| `min`          | `number`                   | `0`     | Minimum value                  |
| `max`          | `number`                   | `100`   | Maximum value                  |
| `step`         | `number`                   | `1`     | Step increment                 |
| `onChange`     | `(value: number) => void`  | -       | Called when value changes      |

### `<SliderTrack />`

Container for the slider track. Handles click-to-position.

| Prop       | Type         | Description           |
|------------|--------------|-----------------------|
| `children` | `ReactNode`  | Track content         |

### `<SliderRange />`

Visual indicator of the filled portion of the slider.

### `<SliderThumb />`

Draggable thumb control. Handles mouse drag and keyboard navigation.

### `useSlider()`

Hook to access slider context values inside subcomponents.

| Return value | Description              |
|--------------|--------------------------|
| `value`      | Current slider value     |
| `setValue`   | Setter for value         |
| `min`        | Minimum value            |
| `max`        | Maximum value            |
| `step`       | Step increment           |
| `trackRef`   | Ref to track element     |
| `thumbRef`   | Ref to thumb element     |

## Accessibility

- Pressing <kbd>Arrow Left</kbd> or <kbd>Arrow Down</kbd> decreases value.
- Pressing <kbd>Arrow Right</kbd> or <kbd>Arrow Up</kbd> increases value.
- Pressing <kbd>Home</kbd> sets to minimum value.
- Pressing <kbd>End</kbd> sets to maximum value.
- ARIA attributes are set for screen readers.
- Fully keyboard navigable.

## Customization

Components come with minimal default styles that can be easily overridden using `className` or `style` props. Default styles use a clean, modern design that works out of the box.

### Default Styles

- **SliderTrack**: 8px height, light gray background, rounded corners
- **SliderRange**: Blue (#3b82f6) background, matches track border radius
- **SliderThumb**: 20px circular button, white background with blue border

All default styles can be completely overridden by passing your own `style` or `className` props.
