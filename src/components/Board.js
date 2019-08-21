import React, { PureComponent } from 'react';
import styles from './Board.module.scss';
import logo from '../assets/logo.svg';
import { getCurrencySymbol } from '../utils';

export class Board extends PureComponent {

    getProduct = (item) => {
        return (
          <div className={styles.product} key={item.id}>
              <p className={styles.productTitle}>{item.title}</p>
              <p className={styles.productMoney}>{item.money}&nbsp;{getCurrencySymbol(item.currency)}</p>
          </div>
        );
    };

    render() {
        const { products } = this.props;

        return (
          <aside className={styles.boardWrapper}>
              <div className={styles.board}>
                  <div className={styles.logo}>
                      <img src={logo} alt="Дальше действовать будем мы" />
                  </div>
                  <div className={styles.board__items}>
                      {products.map(this.getProduct)}
                  </div>
              </div>
          </aside>
        );
    }
}