import content from '../../../content.json'
import styles from './PortretiFooter.module.css'

export default function PortretiFooter() {
  const { name, socials } = content.footer
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p className={styles.name}>{name}</p>
      <div className={styles.socials}>
        {socials.map(s => (
          <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.social}>
            {s.label}
          </a>
        ))}
      </div>
      <p className={styles.copy}>© {year} {name}</p>
    </footer>
  )
}
