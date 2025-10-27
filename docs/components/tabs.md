# Tabs

A headless, accessible Tabs component for React. Composed of multiple subcomponents for flexible usage.

## Features

- Accessible (keyboard navigation, ARIA attributes)
- Headless (no styles, fully customizable)
- Composable API (`Tabs`, `TabsList`, `Tab`, `TabsPanel`)
- Context-powered hooks

## Installation

```bash
npm install react-headless-ui-kit
```

## Usage

```tsx
import {
  Tabs,
  TabsList,
  Tab,
  TabsPanel,
  useTabs,
} from "react-headless-ui-kit";

function ExampleTabs() {
  return (
    <Tabs defaultIndex={0}>
      <TabsList style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Tab index={0}>Tab One</Tab>
        <Tab index={1}>Tab Two</Tab>
        <Tab index={2}>Tab Three</Tab>
      </TabsList>
      <TabsPanel index={0}>
        <div>Content for Tab One</div>
      </TabsPanel>
      <TabsPanel index={1}>
        <div>Content for Tab Two</div>
      </TabsPanel>
      <TabsPanel index={2}>
        <div>Content for Tab Three</div>
      </TabsPanel>
    </Tabs>
  );
}
```

## API Reference

### `<Tabs />`

| Prop           | Type         | Description                       |
|----------------|--------------|-----------------------------------|
| `children`     | `ReactNode`  | Tabs content                      |
| `defaultIndex` | `number`     | Initial selected tab index        |

### `<TabsList />`

Container for tab buttons.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Tab buttons                       |

### `<Tab />`

Individual tab button.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `index`   | `number`     | Tab index                         |
| `children`| `ReactNode`  | Tab label                         |

### `<TabsPanel />`

Panel for tab content.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `index`   | `number`     | Panel index                       |
| `children`| `ReactNode`  | Panel content                     |

### `useTabs()`

Hook to access tabs context values inside subcomponents.

| Return value      | Description           |
|-------------------|----------------------|
| `selectedIndex`   | Selected tab index   |
| `setSelectedIndex`| Setter for index     |
| `tabRefs`         | Array of tab refs    |
| `panelRefs`       | Array of panel refs  |

## Accessibility

- Arrow keys navigate between tabs.
- ARIA attributes are set for screen readers.
- Only the selected panel is visible.

## Customization

All components are unstyled. Use your own styles via `className` or `style` props.
