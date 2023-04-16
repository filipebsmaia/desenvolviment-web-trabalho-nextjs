import React from 'react';

import './global.css';
import styles from "./layout.module.css";
import NavItem from '@/components/NavItem';

interface SpotifyLayoutProps {
  children: React.ReactNode;
}

export default function SpotifyLayout({ children }: SpotifyLayoutProps) {

  return (
    <>
      <header id={styles.header}>
        <nav id={styles.navbar}>
          <img src="/assets/logo.svg" alt="" />
          <div id={styles.nav_container}>
            <ul id={styles.nav_common}>
              <NavItem href="#" text="Premium"/>
              <NavItem href="#" text="Ajuda"/>
              <NavItem href="#" text="Baixar"/>
            </ul>
            <ul id={styles.nav_account}>
              <NavItem href="#" secondary text="Inscrever-se"/>
              <NavItem href="#" secondary text="Entrar"/>
            </ul>
          </div>
        </nav>
      </header>
      {children}
    </>
  )
};
