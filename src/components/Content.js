import React, { PureComponent } from 'react';
import { TimelineItem } from './TimelineItem';
import { Button } from './atoms/Button';
import styles from './Content.module.scss';
import { OPERATIONS } from '../constants';

export class Content extends PureComponent {
    get timeline() {
        return (
          <div>
              {OPERATIONS.map((item) => {
                  return (
                      <TimelineItem {...item} />
                  );
              })}
              <div className={styles.buttonWrapper}>
                  <Button size='l'>Показать еще</Button>
              </div>
          </div>
        )
    }

    render() {
        return (
          <main className={styles.content}>
              <div className={styles.timelineWrapper}>
                  <h3>События</h3>
                  {this.timeline}
              </div>
          </main>
        );
    }
}
