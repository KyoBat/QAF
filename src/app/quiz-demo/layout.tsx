import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiz Demo | TahaLearn',
  robots: {
    index: false,
    follow: false,
  },
}

export default function QuizDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
