import styles from "./styles.module.scss";

interface SkillBarProps {
  skillName: string;
  porcentage: string;
}

const SkillBar = ({ skillName, porcentage }: SkillBarProps) => {
  return (
    <div className={styles.containerDiv}>
      <span className={styles.textContainer}>
        <p>{skillName.toUpperCase()}</p>
      </span>
      <span className={styles.percentageContainer} style={{ width: `${porcentage}`}}>
        <p>{porcentage}</p>
      </span>
    </div>
  );
};

export { SkillBar };
