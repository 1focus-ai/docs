import "./global.css"
import { RootProvider } from "fumadocs-ui/provider/next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default:
      "docs.1focus.ai | App for collaborative context engineering. Ask questions, orchestrate agents, together.",
    template: "%s | docs.1focus.ai",
  },
  description:
    "App for collaborative context engineering. Ask questions, orchestrate agents, together.",
  metadataBase: new URL("https://docs.1focus.ai"),
  // TODO: not sure if this is applied
  openGraph: {
    title: "docs.1focus.ai",
    description:
      "App for collaborative context engineering. Ask questions, orchestrate agents, together.",
    url: "https://docs.1focus.ai",
    siteName: "docs.1focus.ai",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "1focus",
    "1focus.ai",
    "context engineering",
    "agents",
    "collaborative",
  ],
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
