import content from '../../content.json'
import styles from './Hero.module.css'

export default function Hero() {
  const { title, subtitle, tagline } = content.ikonopisanje.hero

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.cross}>✝</div>
      <div className={styles.ornament} />
      <h1 className={styles.title}>
        {title}
        <em className={styles.subtitle}>{subtitle}</em>
      </h1>
      <p className={styles.tagline}>{tagline}</p>
      <div className={styles.ornament} />
      <span className={styles.scroll}>↓ &nbsp; Istraži</span>
    </section>
  )
}
