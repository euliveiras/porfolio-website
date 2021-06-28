//
import styles from "./styles.module.scss";

const NavigationMenu = (props: { fixMenu: boolean }) => {
  return (
    <section
      className={`${styles.navigationMenu} ${
        props.fixMenu && styles.navigationMenuFixed
      }`}
    >
      <a href="#home">início</a>
      <a href="#quem-sou">quem sou</a>
      <a href="#projetos">projetos</a>
      <a href="#blog">blog</a>
    </section>
  );
};

export { NavigationMenu };
