import React, { PureComponent } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';
import styles from './Layout.module.css';

export default class extends PureComponent {
    render() {
        return (
            <div className={styles.layout}>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}