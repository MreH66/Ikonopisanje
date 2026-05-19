import content from "../../content.json";
import styles from "./Contact.module.css";

export default function Contact() {
  const { email, phone } = content.home.contact;

  return (
    <section id="contact" className={styles.section}>
      <div className="section-inner">
        <p className="section-label">Stupite u kontakt</p>
        <h2 className="section-title">Kontakt</h2>

        <div className="gold-divider">
          <span>✦</span>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.icon}>✉</div>
            <div>
              <p className={styles.label}>Email</p>
              <a href={`mailto:${email}`} className={styles.value}>
                {email}
              </a>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>☎</div>
            <div>
              <p className={styles.label}>Telefon</p>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className={styles.value}
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
