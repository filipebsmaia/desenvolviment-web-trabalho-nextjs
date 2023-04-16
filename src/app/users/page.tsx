
import Button from '@/components/Button';
import styles from '../page.module.css'

interface User {
  id: number;
  name: string;
}

export const metadata = {
  title: 'User List',
  description: 'User list with ssr',
}

const getUsers = async (): Promise<Array<User>> => {
  const res = await fetch("http://localhost:3000/api/users", {
    headers: {
      UltraSecretToken: "abc"
    }
  });

  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className={styles.main}>
    <h1>Lista de usuários</h1>
      <div className={styles.description}>
        {users.map(user => (
          <Button key={user.id}>
            {user.id} {user.name}
          </Button>
        ))}
      </div>
    </main>
  )
}
