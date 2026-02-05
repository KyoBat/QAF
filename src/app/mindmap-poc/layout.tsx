import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mindmap POC | TahaLearn',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MindmapPocLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
