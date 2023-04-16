import React from 'react';

import styles from './page.module.css'
import Button from '@/components/Button';

export const metadata = {
  title: 'Spotify',
  description: 'Spotify index page',
}

export default function Spotify() {

  return (
    <main id={styles.home}>
      <div>
        <h1>Música para todos.</h1>
        <p>Milhoes de músicas à sua escolha. E nem precisa de cartão de crédito.</p>
        <Button>OBTENHA O SPOTIFY FREE</Button>
      </div>
    </main>
  )
};
