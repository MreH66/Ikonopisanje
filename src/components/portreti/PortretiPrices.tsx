import content from "../../../content.json";
import styles from "./PortretiPrices.module.css";

export default function PortretiPrices() {
  const { intro, items } = content.portreti.prices;

  return (
    <section id="prices" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Cenovnik</p>
        <h2 className={styles.title}>Porudžbine i cene</h2>
        <div className={styles.divider} />

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.size}>{item.size}</p>
              <p className={styles.price}>{item.price}</p>
              {item.note && <p className={styles.note}>{item.note}</p>}
            </div>
          ))}
        </div>

        <p className={styles.intro}>{intro}</p>
      </div>
    </section>
  );
}
