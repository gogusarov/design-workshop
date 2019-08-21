import React, { PureComponent } from 'react';
import { FOOTER_ITEMS } from '../constants';
import styles from './Footer.module.scss';

export class Footer extends PureComponent {
    get items() {
        return FOOTER_ITEMS.map((item) => {
            return (
                <li>
                    <span className={styles.subpointTitle}>{item.title.toUpperCase()}</span>
                    <ul className={styles.subpoints}>
                        {item.subpoints.map((subpoint) => (<li className={styles.subpointItem}>{subpoint}</li>))}
                    </ul>
                </li>
            );
        });
    }

    render() {
        return (
          <footer className={styles.footer}>
              <ul className={styles.footerItems}>
                  {this.items}
              </ul>
          </footer>
        );
    }
}
