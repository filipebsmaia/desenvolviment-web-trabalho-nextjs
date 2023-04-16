import React from 'react';
import styles from './index.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  //
};

const Button = ({ children, ...rest }: ButtonProps): JSX.Element => {

  return (
    <button className={styles.button} {...rest}>
      <strong>{children}</strong>
    </button>
  )
};

export default Button;