import Image from "next/image";
import content from "../../content.json";
import styles from "./About.module.css";

export default function About() {
  const { photo, paragraphs } = content.home.about;
  const name = content.site.title;

  return (
    <section id="about" className={styles.section}>
      <div className="section-inner">
        <p className="section-label" style={{ color: "var(--gold)" }}>
          O meni
        </p>
        <h2 className="section-title" style={{ color: "var(--gold-light)" }}>
          {name}
        </h2>

        <div className="gold-divider">
          <span>✦</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.frame}>
            <div className={styles.photoWrap}>
              <Image
                src={photo}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className={styles.photo}
              />
            </div>
          </div>

          <div className={styles.text}>
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? styles.lead : styles.body}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
