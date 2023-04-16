'use client'

import { useEffect, useState } from 'react';
import styles from '../page.module.css'
import Button from '@/components/Button';

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

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    getUsers().then(res => {
      setUsers(res);
    })
  }, [])

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
