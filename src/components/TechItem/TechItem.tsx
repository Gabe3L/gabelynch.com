import type { IconType } from 'react-icons';
import styles from './TechItem.module.css';

interface TechItemProps {
  image: IconType;
  text: string;
}

export const TechItem = ({ image: Icon, text }: TechItemProps) => {
  return (
    <div className={styles.pill}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};