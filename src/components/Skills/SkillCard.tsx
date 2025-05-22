import styles from "./Skills.module.css";

const skillIcons = import.meta.glob("../../assets/skills/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getIconByName = (filename: string): string => {
  const entry = Object.entries(skillIcons).find(([path]) =>
    path.endsWith(`/${filename}.svg`)
  );
  return entry?.[1] ?? "";
};

interface SkillCardProps {
  item: {
    name: string;
    type: string;
  };
}

export const SkillCard  = ({ item }: SkillCardProps) => {
  return (
    <div className={styles.skillItem}>
      <div className={styles.itemImage}>
        <img src={getIconByName(item.name)} alt={item.name} />
      </div>
      <div className={styles.itemTitle}>
        <p>{item.name}</p>
        <span>{item.type}</span>
      </div>
    </div>
  );
};