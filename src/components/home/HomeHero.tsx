import Link from 'next/link'
import content from '../../../content.json'
import styles from './HomeHero.module.css'

export default function HomeHero() {
  const { greeting, name, tagline } = content.home.hero

  return (
    <section className={styles.hero}>
      <div className={styles.top}>
        <p className={styles.greeting}>{greeting}</p>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.tagline}>{tagline}</p>
      </div>

      <div className={styles.doors}>
        {/* Left door — Ikonopisanje */}
        <Link href="/ikonopisanje" className={`${styles.door} ${styles.doorIkone}`}>
          <div className={styles.doorInner}>
            <span className={styles.doorSymbol}>☩</span>
            <span className={styles.doorTitle}>Ikonopisanje</span>
            <span className={styles.doorSub}>Vizantijska tradicija</span>
            <span className={styles.doorArrow}>→</span>
          </div>
        </Link>

        {/* Divider */}
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerDot}>✦</span>
          <div className={styles.dividerLine} />
        </div>

        {/* Right door — Portreti */}
        <Link href="/portreti" className={`${styles.door} ${styles.doorPortreti}`}>
          <div className={styles.doorInner}>
            <span className={styles.doorSymbol}>◈</span>
            <span className={styles.doorTitle}>Portreti</span>
            <span className={styles.doorSub}>Realistično portretisanje</span>
            <span className={styles.doorArrow}>→</span>
          </div>
        </Link>
      </div>
    </section>
  )
}
