import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
//
import photo from "../assets/me.png";
import { NavigationMenu, SkillBar } from "../components/";
import styles from "./home.module.scss";

export default function Home() {
  const [fixMenu, setFixMenu] = useState(false);
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sticky: number | undefined = scrollRef.current?.offsetTop;
    window.onscroll = () => handleScroll(sticky);
  }, [scrollRef.current?.offsetTop, scrollRef.current?.offsetHeight]);

  const handleScroll = (sticky: number | undefined) => {
    if (window.screen.width > 1024) {
      if (sticky && window.pageYOffset >= sticky) {
        setFixMenu(true);
      } else {
        setFixMenu(false);
      }
    }
  };

  return (
    <>
      <main className={styles.mainContent}>
        <section
          id="home"
          className={`${styles.sectionContainer} ${styles.homeSection}`}
        >
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
        <NavigationMenu fixMenu={fixMenu} />
        <section
          ref={scrollRef}
          id="quem-sou"
          className={`${styles.sectionContainer} ${styles.aboutContainer} `}
        >
          <div className={styles.sectionTitle}>
            <h2>quem sou</h2>
            <div />
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.aboutTextContainer}>
              <div className={styles.aboutText}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dolor morbi non arcu risus. Mattis enim ut tellus elementum
                  sagittis vitae et. Convallis posuere morbi leo urna molestie.
                  Turpis egestas maecenas pharetra convallis posuere morbi leo.
                  Orci eu lobortis elementum nibh tellus molestie. Pulvinar
                  elementum integer enim neque. Lorem sed risus ultricies
                  tristique nulla aliquet enim tortor at. Consequat semper
                  viverra nam libero justo laoreet sit amet. Elementum facilisis
                  leo vel fringilla est ullamcorper eget nulla facilisi.
                </p>
              </div>
              <div className={styles.aboutSkills}>
                <SkillBar skillName="javascript" porcentage="70%" />
                <SkillBar skillName="nodejs" porcentage="50%" />
                <SkillBar skillName="reactjs" porcentage="50%" />
                <SkillBar skillName="html" porcentage="50%" />
                <SkillBar skillName="css" porcentage="40%" />
              </div>
            </div>
            <div className={styles.selfImageContainer}>
              <img
                src={photo}
                width={250}
                height={280}
                alt="Foto de Matheus Oliveira"
              />
            </div>
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
