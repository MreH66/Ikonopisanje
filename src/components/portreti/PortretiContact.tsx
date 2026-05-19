import content from '../../../content.json'
import styles from './PortretiContact.module.css'

export default function PortretiContact() {
  const { email, phone } = content.home.contact

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Kontakt</p>
        <h2 className={styles.title}>Stupite u kontakt</h2>
        <div className={styles.divider} />

        <div className={styles.items}>
          <div className={styles.item}>
            <span className={styles.itemLabel}>Email</span>
            <a href={`mailto:${email}`} className={styles.itemValue}>{email}</a>
          </div>
          <div className={styles.item}>
            <span className={styles.itemLabel}>Telefon</span>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.itemValue}>{phone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
