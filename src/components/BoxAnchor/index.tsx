import React from 'react';
import styles from './index.module.css'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

interface IBoxAnchorProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'children'> {
  href: string
  title: string;
  text: string;
};

const BoxAnchor = ({ href, title, text }: IBoxAnchorProps): JSX.Element => {

  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        {title} <span>-&gt;</span>
      </h2>
      <p className={inter.className}>{text}</p>
    </a>
  )
};

export default BoxAnchor;