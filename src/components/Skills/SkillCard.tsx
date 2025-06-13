import type { FC, SVGProps } from "react";
import styles from "./SkillCard.module.css";

interface SkillCardProps {
  item: {
    id: number;
    name: string;
    type: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
  };
}

export const SkillCard  = ({ item }: SkillCardProps) => {
  return (
    <div className={styles.skillItem}>
      <div className={styles.itemImage}>
        <item.Icon className={styles.skillIcon}/>
      </div>
      <div className={styles.itemTitle}>
        <h1>{item.name}</h1>
        <p>{item.type}</p>
      </div>
    </div>
  );
};