import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
//
import photo from "./assets/me.png";
import styles from "./styles/home.module.css";

export default function Home() {
  const [fixMenu, setFixMenu] = useState(false);
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sticky: number | undefined = scrollRef.current?.offsetTop;
    window.onscroll = () => handleScroll(sticky);
  }, [scrollRef.current?.offsetTop]);

  const handleScroll = (sticky: number | undefined) => {
    if (sticky && window.pageYOffset >= sticky + 100) {
      setFixMenu(true);
    } else {
      setFixMenu(false);
    }
  };

  return (
    <>
      <main className={styles.mainContent}>
        <section id="home" className={styles.sectionContainer}>
          <div className={styles.textContainer}>
            <h1>
              Olá, meu nome é <strong>Matheus Oliveira</strong>. <br /> Eu sou
              desenvolvedor full-stack.
            </h1>
            <img
              src={photo}
              width={250}
              height={280}
              alt="Foto de Matheus Oliveira"
            />
          </div>
          <span className={styles.arrowContainer}>
            <a href="#quem-sou">
              <h2>Conheça meu trabalho</h2>
              <FaArrowRight className={styles.animatedArrow} size={30} />
            </a>
          </span>
        </section>
        <section
          className={`${styles.navigationMenu} ${
            fixMenu && styles.navigationMenuFixed
          }`}
        >
          <a href="#home">início</a>
          <a href="#quem-sou">quem sou</a>
          <a href="#projetos">projetos</a>
          <a href="#blog">blog</a>
        </section>
        <section
          ref={scrollRef}
          id="quem-sou"
          className={`${styles.sectionContainer} ${styles.aboutContainer}`}
        >
          <div className={styles.selfImageContainer}>
            <img src={photo} alt="Foto de Matheus Oliveira" />
          </div>
          <div className={styles.aboutTextContainer}>
            <h1>Em construção</h1>
          </div>
        </section>
        <section
          id="projetos"
          className={`${styles.sectionContainer} ${styles.skillsContainer}`}
        >
          {" "}
          <h1>Em construção</h1>
        </section>
        <section
          id="blog"
          className={`${styles.sectionContainer} ${styles.blogContainer}`}
        >
          {" "}
          <h1>Em construção</h1>
        </section>
        <a href="#home">voltar ao topo</a>
      </main>
    </>
  );
}
