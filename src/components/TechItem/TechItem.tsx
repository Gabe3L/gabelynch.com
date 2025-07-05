import React from 'react';
import styles from './TechItem.module.css';

interface TechItemProps {
  image: React.ReactNode;
  text: string;
}

export const TechItem = ({ image, text }: TechItemProps) => {
  return (
    <div className={styles.pill}>
      <span className={styles.icon}>{image}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};