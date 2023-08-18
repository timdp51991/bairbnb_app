import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'
import ClientOnly from './components/ClientOnly'

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bairbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences',
  description: 'Find vacation rentals, cabins, beach houses, unique homes and experiences around the world.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      
      <body className={nunito.className}>
        {/* <Modal actionLabel='Submit' title='Hello Modal' isOpen /> */}
      <ClientOnly>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <SearchModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
