import React from 'react';
import styles from './index.module.css'

interface NavItemProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'children'> {
  text: string;
  secondary?: boolean;
};

const NavItem = ({ text, secondary, target, ...rest }: NavItemProps): JSX.Element => {

  return (
    <li className={`${styles.nav_item} ${secondary ? styles.secondary : ''}`}>
      <a target={target ?? "_blank"} {...rest} >{text}</a>
    </li>
  )
};

export default NavItem;