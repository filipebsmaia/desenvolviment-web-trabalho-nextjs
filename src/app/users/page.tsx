
import styles from '../page.module.css'

interface User {
  id: number;
  name: string;
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
  console.log(users)

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {users.map(user => (
          <p key={user.id}>
            {user.id} {user.name}
          </p>
        ))}
      </div>
    </main>
  )
}
