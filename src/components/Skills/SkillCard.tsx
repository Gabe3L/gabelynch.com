import styles from "./SkillCard.module.css";

const skillIcons = import.meta.glob("../../assets/skills/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getIconByName = (filename: string): string => {
  return (
    Object.entries(skillIcons).find(([path]) =>
      path.endsWith(filename)
    )?.[1] ?? ""
  );
};

interface SkillCardProps {
  item: {
    id: number;
    name: string;
    type: string;
    file: string;
  };
}

export const SkillCard  = ({ item }: SkillCardProps) => {
  return (
    <div className={styles.skillItem}>
      <div className={styles.itemImage}>
        <img src={getIconByName(item.file)} 
             alt={item.name}
             className={styles.skillIcon}
        />
      </div>
      <div className={styles.itemTitle}>
        <p>{item.name}</p>
        <span>{item.type}</span>
      </div>
    </div>
  );
};