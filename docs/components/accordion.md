# Accordion

A fully accessible, headless Accordion component for React. Composed of multiple subcomponents for flexible usage.

## Features

- Accessible (keyboard navigation, ARIA attributes)
- Headless (no styles, fully customizable)
- Composable API (`Accordion`, `AccordionItem`, `AccordionHeader`, `AccordionPanel`)
- Context-powered hooks

## Installation

```bash
npm install react-headless-ui-kit
```

## Usage

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  useAccordion,
} from "react-headless-ui-kit";

function MultipleOpenAccordion() {
  return (
    <Accordion multiple defaultOpenItems={["item-1"]}>
      <AccordionItem>
        <AccordionHeader value="item-1">
          Section 1
        </AccordionHeader>
        <AccordionPanel value="item-1">
          Content for section 1.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader value="item-2">
          Section 2
        </AccordionHeader>
        <AccordionPanel value="item-2">
          Content for section 2.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

function SingleOpenAccordion() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader value="item-1">
          Section 1
        </AccordionHeader>
        <AccordionPanel value="item-1">
          Content for section 1.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader value="item-2">
          Section 2
        </AccordionHeader>
        <AccordionPanel value="item-2">
          Content for section 2.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
```

## API Reference

### `<Accordion />`

| Prop             | Type                | Description                                 |
|------------------|---------------------|---------------------------------------------|
| `children`       | `ReactNode`         | Accordion items                             |
| `multiple`       | `boolean`           | Allow multiple items open at once           |
| `defaultOpenItems` | `string[]`        | Items open by default                       |

### `<AccordionItem />`

Wraps each accordion section.

| Prop      | Type                 | Description                       |
|-----------|----------------------|-----------------------------------|
| `children`| `ReactNode`          | Item content                      |
| `value`   | `string`             | Unique item identifier            |

### `<AccordionHeader />`

Accordion section header and trigger.

| Prop      | Type                 | Description                       |
|-----------|----------------------|-----------------------------------|
| `children`| `ReactNode`          | Header content                    |
| `value`   | `string`             | Item identifier                   |

### `<AccordionPanel />`

Accordion section panel (content).

| Prop      | Type                 | Description                       |
|-----------|----------------------|-----------------------------------|
| `children`| `ReactNode`          | Panel content                     |
| `value`   | `string`             | Item identifier                   |

### `useAccordion()`

Hook to access accordion context values inside subcomponents.

| Return value | Description           |
|--------------|----------------------|
| `openItems`  | Array of open item ids|
| `toggleItem` | Toggle item callback  |
| `multiple`   | Multiple open mode    |

## Accessibility

- Keyboard navigation and ARIA attributes for screen readers.
- Each header is linked to its panel via ARIA attributes.
- Only one or multiple panels can be open, depending on `multiple` prop.

## Customization

All components are unstyled. Use your own styles via `className` or `style` props.
