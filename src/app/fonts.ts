import { Plus_Jakarta_Sans  } from 'next/font/google'

export const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary' // będzie dostępny w css pod tą zmienną
})

