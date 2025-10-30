import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "React Headless UI Kit",
    description:
        "A collection of unstyled, accessible, headless UI primitives for React. Focus on behavior and accessibility, leave styling to your design system.",
    base: "/react-headless-ui-kit/docs",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Documentation", link: "/components/dialog" },
        ],

        sidebar: [
            {
                text: "Components",
                items: [
                    { text: "Dialog", link: "/components/dialog" },
                    { text: "Popover", link: "/components/popover" },
                    { text: "Accordion", link: "/components/accordion" },
                    { text: "Tabs", link: "/components/tabs" },
                    { text: "DatePicker", link: "/components/datePicker" },
                ],
            },
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/Shakir-Afridi/react-headless-ui-kit",
            },
            {
                icon: "npm",
                link: "https://www.npmjs.com/package/react-headless-ui-kit",
            },
            {
                icon: {
                    svg: `
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FF4785" d="M23.86 0v24H.14V0zM19.97 2.47l-.08 2.35a.34.34 0 0 0 .56.28l.76-.57.74.54a.33.33 0 0 0 .53-.26l.1-2.36a.33.33 0 0 0-.34-.34h-2.03a.33.33 0 0 0-.34.36zm-2.23 10.55a.37.37 0 0 1 .37.37v5.44a.37.37 0 0 1-.37.37h-.76a.37.37 0 0 1-.36-.31l-.33-2.07-2.34.29-.4 1.77a.37.37 0 0 1-.37.31h-.78a.37.37 0 0 1-.37-.37V13.4a.37.37 0 0 1 .37-.37zm-6.7-.02a.37.37 0 0 1 .37.37v3.45c0 .2.16.36.36.36h2.54a.37.37 0 0 1 .36.37v.74a.37.37 0 0 1-.36.37H9.77a.37.37 0 0 1-.37-.37V13.4a.37.37 0 0 1 .37-.37zm3.77-4.77a1.11 1.11 0 1 1-1.11-1.11 1.1 1.1 0 0 1 1.11 1.11z"/>
                </svg>
              `,
                },
                link: "https://shakir-afridi.github.io/react-headless-ui-kit/storybook",
            },
        ],
    },
});
