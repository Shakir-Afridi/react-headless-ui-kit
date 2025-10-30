# Menu

A headless, accessible Menu (dropdown) component for React. Composed of multiple subcomponents for flexible usage.

## Features

- Accessible (keyboard navigation with Arrow keys, Home, End, Escape, ARIA attributes)
- Headless (no styles, fully customizable)
- Composable API (Menu, MenuButton, MenuItems, MenuItem)
- Context-powered hooks
- Auto-closes on item selection or outside click

## Installation

```bash
npm install react-headless-ui-kit
```

## Usage

```tsx
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  useMenu,
} from "react-headless-ui-kit";

function ExampleMenu() {
  return (
    <Menu>
      <MenuButton
        id="menu-button"
        style={{
          padding: "0.5rem 1rem",
          border: "1px solid #ccc",
          borderRadius: 4,
          background: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        Options ▼
      </MenuButton>
      <MenuItems
        style={{
          marginTop: "4px",
          background: "white",
          border: "1px solid #ddd",
          borderRadius: 4,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          minWidth: "150px",
        }}
      >
        <MenuItem onClick={() => console.log("Profile")}>
          Profile
        </MenuItem>
        <MenuItem onClick={() => console.log("Settings")}>
          Settings
        </MenuItem>
        <MenuItem onClick={() => console.log("Logout")}>
          Logout
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
```

## API Reference

### `<Menu />`

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Menu content                      |

### `<MenuButton />`

Button to open/close the menu.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Button content                    |

### `<MenuItems />`

Menu items container. Handles ARIA attributes, visibility, and keyboard navigation.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Menu items                        |

### `<MenuItem />`

Individual menu item. Auto-closes menu on click.

| Prop      | Type         | Description                       |
|-----------|--------------|-----------------------------------|
| `children`| `ReactNode`  | Item content                      |
| `onClick` | `function`   | Click handler                     |

### `useMenu()`

Hook to access menu context values inside subcomponents.

| Return value   | Description              |
|----------------|--------------------------|
| `open`         | Menu open state          |
| `setOpen`      | Setter for open          |
| `buttonRef`    | Ref to button element    |
| `itemsRef`     | Ref to items container   |
| `activeIndex`  | Currently focused item   |
| `setActiveIndex` | Setter for active index|

## Accessibility

- Pressing <kbd>Escape</kbd> closes the menu and returns focus to the button.
- <kbd>Arrow Down</kbd> / <kbd>Arrow Up</kbd> navigate through menu items.
- <kbd>Home</kbd> / <kbd>End</kbd> jump to first/last item.
- ARIA attributes are set for screen readers (`role="menu"`, `role="menuitem"`).
- Click outside closes the menu.
- Selecting an item closes the menu automatically.

## Customization

All components are unstyled. Use your own styles via `className` or `style` props.
