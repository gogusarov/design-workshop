import React, { PureComponent } from 'react';
import styles from './Header.module.scss';
import { LINKS } from '../constants/header';

export class Header extends PureComponent {
    get links() {
        return LINKS.map((item) => {
            return (
              <li className={styles.linkWrapper}>
                  <a href={item.to} className={styles.link}>{item.title}</a>
              </li>
            );
        })
    }

    render() {
        return (
          <nav className={styles.header}>
              <ul className={styles.navBlock}>
                  {this.links}
              </ul>
          </nav>
        );
    }
}
