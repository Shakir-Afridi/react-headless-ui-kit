# 🧩 Headless React UI Kit

[![license](https://img.shields.io/github/license/Shakir-Afridi/react-headless-ui-kit)](LICENSE)
[![issues](https://img.shields.io/github/issues/Shakir-Afridi/react-headless-ui-kit)](https://github.com/Shakir-Afridi/react-headless-ui-kit/issues)
[![typescript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![react](https://img.shields.io/badge/React-19+-61dafb?logo=react)](https://react.dev/)


A collection of **unstyled, accessible, headless UI primitives** for React.  
Focus on **behavior and accessibility**, leave **styling** to your design system.

---

## ✨ Features

- ♿ **Accessible by default** — ARIA roles, keyboard navigation, focus management
- 🎨 **Headless** — no styles, just behavior; bring your own CSS, Tailwind, or styled-components
- 🧱 **Composable** — subcomponents and hooks for maximum flexibility
- 🔌 **Lightweight** — minimal dependencies, built with modern React

---

📘 Documentation

Comprehensive documentation is available here

👉 [Documentation](https://shakir-afridi.github.io/react-headless-ui-kit/docs)

---

## 📘 Storybook

Explore all hooks interactively on Storybook:  
👉 [Live Demo](https://shakir-afridi.github.io/react-headless-ui-kit/storybook)

## 📦 Installation

```bash
npm install @your-scope/headless-ui
# or
yarn add @your-scope/headless-ui
```

## 🚀 Usage Example

```tsx
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogActions,
  useDialog,
} from '@your-scope/headless-ui';
import React, { useState } from 'react';

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open dialog</button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogOverlay className="fixed inset-0 bg-black/50 grid place-items-center">
          <DialogContent className="bg-white p-4 rounded max-w-md w-full">
            <DialogTitle className="text-lg font-bold">Example Dialog</DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              This is an unstyled headless dialog component.
            </DialogDescription>
            <DialogActions className="flex gap-2 mt-4">
              <button onClick={() => alert('Confirmed!')}>Confirm</button>
              <button onClick={() => setOpen(false)}>Close</button>
            </DialogActions>
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </div>
  );
}
```

## 🧩 API

`<Dialog />`

- Props
  - `open: boolean` — whether the dialog is open
  - `onClose: () => void` — called when dialog should close
  - `children: ReactNode` — subcomponents (`DialogOverlay`, `DialogContent`, etc.)
  - `container?: Element` — optional portal container (defaults to `document.body`)

`<DialogOverlay />`

- Wraps the backdrop behind the dialog
- Handles click-to-close by default

`<DialogContent />`

- The actual dialog container
- Handles focus trapping and accessibility attributes

`<DialogTitle />`

- Provides the accessible name for the dialog (`aria-labelledby`)

`<DialogContent />`

- Provides the accessible content (`aria-describedby`)

`<DialogActions />`

- A simple wrapper for action buttons

`useDialog`

Access dialog context values inside any subcomponent:

```tsx
const { open, onClose, titleId, descriptionId } = useDialog();
```

- `open` — current open state
- `onClose` — function to close the dialog
- `titleId` / `descriptionId` — auto-generated IDs for accessibility wiring

## 📚 Roadmap

### Planned headless components

- [x] Dialog
- [x] Popover
- [ ] Tabs
- [ ] Accordion
- [ ] Menu
- [ ] Tooltip
- [ ] Combobox
- [ ] Switch
- [ ] Slider
- [ ] Date Picker

## 🛠 Development

```bash
# Run Storybook
npm run storybook
```

## 👨‍💻 Author

React Headless UI Kit — maintained by passionate open-source developers who believe in clean, reusable React logic

## ⭐ Support

If you find this library useful, please give it a star ⭐ on GitHub —
it helps others discover and support the project!