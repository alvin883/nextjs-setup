import React from 'react';
import { ReactComponent as ArrowLeft } from '@icons/icon-arrow-left.svg';
import styles from './example-alias.module.scss';

const ExampleAlias = () => {
  return (
    <div className={styles.text}>
      <ArrowLeft className={styles.icon} />
      <span>Example Alias</span>
    </div>
  );
};

export default ExampleAlias;
