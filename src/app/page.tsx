import { Inter } from 'next/font/google'
import styles from './page.module.css'
import NavItem from '@/components/NavItem'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>
        <NavItem href="/spotify" text="Spotify"/>
      </Button>
      <Button>
        <NavItem href="/users" text="Users"/>
      </Button>
      <Button>
        <NavItem href="/users-client-side" text="Users-Non-SSR"/>
      </Button>
      
    </main>
  )
}
