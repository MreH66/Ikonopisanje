import content from "../../content.json";
import styles from "./Footer.module.css";

export default function Footer() {
  const { name, socials } = content.footer;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.cross}>✝</div>
      <p className={styles.name}>{name}</p>

      <div className={styles.socials}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            {s.label}
          </a>
        ))}
      </div>

      <p className={styles.copy}>
        © {year} {name} · Sve ikone pisane su rukom
      </p>
    </footer>
  );
}
