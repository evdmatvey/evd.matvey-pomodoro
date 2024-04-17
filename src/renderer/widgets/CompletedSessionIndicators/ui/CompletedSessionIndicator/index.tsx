import { FC } from 'react';
import styles from './CompletedSessionIndicator.module.css';

interface CompletedSessionIndicatorProps {
  isCompleted: boolean;
}

const CompletedSessionIndicator: FC<CompletedSessionIndicatorProps> = ({ isCompleted }) => {
  const className = `${styles.root} ${isCompleted ? styles.completed : ''}`;

  return <div className={className}></div>;
};

export default CompletedSessionIndicator;
