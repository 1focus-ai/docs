import { useCookie } from "blade/hooks"
import { useMetadata } from "blade/server/hooks"
import type { TableOfContents } from "blade/types"

import type { CodeProps } from "@/components/code.client"
import { Code, InlineCode } from "@/components/code.client"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header.client"
import { Heading } from "@/components/heading.client"
import { Nav, type NavGroup } from "@/components/nav"
import { TableOfContentsSidebar } from "@/components/table-of-contents.client"
import type { Theme } from "@/components/theme-toggle.client"
import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

const NAV: Array<NavGroup> = [
  {
    name: "Get Started",
    items: [
      {
        id: "introduction",
        name: "Introduction",
        href: "/",
      },
    ],
  },
]

interface HeadingProps {
  children: React.ReactNode
  id?: string
}

const title = "1Focus"
const description = "App for collaborative context engineering. Ask questions, orchestrate agents, together."

const DocsLayout = ({
  children,
  tableOfContents,
}: {
  children: React.ReactNode
  tableOfContents: TableOfContents
}) => {
  const [theme] = useCookie<Theme>("theme")

  useMetadata({
    htmlClassName: cn(
      "scroll-smooth antialiased",
      theme && ["dark", "light"].includes(theme) ? theme : undefined,
    ),
    title,
    description,
    icon: "https://blade.im/static/black.png",
    openGraph: {
      title,
      description,
      siteName: title,
      images: [
        {
          url: "https://blade.im/static/banner.png",
          width: 1280,
          height: 720,
        },
      ],
    },
  })

  return (
    <>
      <div className="flex min-h-svh flex-col bg-background">
        <Header nav={NAV} />

        <div className="flex w-full items-start justify-center gap-x-12 px-8 lg:gap-x-16 lg:px-6">
          <div className="sticky top-24 hidden w-48 sm:block">
            <Nav nav={NAV} />
          </div>

          <div className="flex w-full min-w-0 max-w-3xl flex-1 flex-col pt-12 pb-24 text-neutral-800 2xl:max-w-4xl dark:text-neutral-300">
            {children}
          </div>

          <div className="sticky top-24 hidden w-48 xl:block">
            <TableOfContentsSidebar toc={tableOfContents} />
          </div>
        </div>

        <Footer theme={theme} />
      </div>
    </>
  )
}

// biome-ignore lint/nursery/useComponentExportOnlyModules: This is needed for the docs.
export const components = {
  pre: (props: CodeProps) => <Code {...props} />,
  code: (props: CodeProps) => <InlineCode {...props} />,
  h1: (props: HeadingProps) => <Heading level={1} {...props} />,
  h2: (props: HeadingProps) => <Heading level={2} {...props} />,
  h3: (props: HeadingProps) => <Heading level={3} {...props} />,
  h4: (props: HeadingProps) => <Heading level={4} {...props} />,
  h5: (props: HeadingProps) => <Heading level={5} {...props} />,
  h6: (props: HeadingProps) => <Heading level={6} {...props} />,
  p: (props: ComponentProps<"p">) => (
    <p className="my-2 text-muted-foreground" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="mb-4 list-disc pl-6 text-muted-foreground" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="mb-2 text-muted-foreground" {...props} />
  ),
}

export default DocsLayout
