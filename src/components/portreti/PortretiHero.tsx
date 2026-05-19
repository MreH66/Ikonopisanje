import content from "../../../content.json";
import styles from "./PortretiHero.module.css";

export default function PortretiHero() {
  const { title, subtitle, tagline } = content.portreti.hero;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{subtitle}</p>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.line} />
        <p className={styles.tagline}>{tagline}</p>
      </div>
      <span className={styles.scroll}>↓</span>
    </section>
  );
}
