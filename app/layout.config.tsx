import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "docs.1focus.ai",
  },
  links: [
    {
      text: "Web",
      url: "https://1focus.ai",
    },
    {
      text: "GitHub",
      url: "https://github.com/1focus-ai",
    },
    {
      text: "X",
      url: "https://x.com/1focus_ai",
    },
  ],
}
