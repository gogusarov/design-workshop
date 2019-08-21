import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ size, children }) => {
  return (
      <button className={cn(styles.button, styles[`size_${size}`])} type="button" >
          {children}
      </button>
  )
};