import React, { PureComponent } from 'react';
import styles from './Content.module.scss';

export class TimelineItem extends PureComponent {
    get logo() {
        const { img } = this.props;

        return (
            <div className={styles.operationLogo}>
                <img width={48} height={48} src={img} alt="" />
            </div>
        );
    }

    get operationSign() {
        const { type } = this.props;

        switch (type) {
            case 'addition':
                return '+';
            case 'subtraction':
                return '-';
        }
    }

    get sum() {
        const { type, sum } = this.props;

        return (
            <span className={styles[type]}>
                {`${this.operationSign}${sum}`}
            </span>
        )
    }

    render() {
        const { id, card, subject, category, comment } = this.props;
        
        return (
            <div key={id} className={styles.operation}>
                <div className={styles.operationContent}>
                    {this.logo}

                    <div className={styles.operationDetails}>
                        <div className={styles.operationRow}>
                            <span className={styles.operationCard}>
                                {card}
                            </span>

                            {this.sum}
                        </div>
                        <div className={styles.operationRow}>
                            <span>
                                {subject}
                            </span>

                            <span className={styles.operationCategory}>
                                {category}
                            </span>
                        </div>
                    </div>
                </div>

                {comment && <div className={styles.operationComment}>
                    <p className={styles.commentText}>
                         {comment}
                    </p>
                </div>}
            </div>
        );
    }
}