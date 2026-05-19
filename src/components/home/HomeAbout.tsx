import Image from "next/image";
import content from "../../../content.json";
import styles from "./HomeAbout.module.css";

export default function HomeAbout() {
  const { photo, paragraphs } = content.home.about;
  const name = content.site.title;

  return (
    <section id="about" className={styles.section}>
      <div className="section-inner">
        <p className="section-label">O umetniku</p>
        <h2 className="section-title">{name}</h2>

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
