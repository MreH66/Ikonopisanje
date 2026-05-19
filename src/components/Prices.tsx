import content from "../../content.json";
import styles from "./Prices.module.css";

type Props = { section: "ikonopisanje" | "portreti" };

export default function Prices({ section }: Props) {
  const { intro, items } = content[section].prices;

  return (
    <section id="prices" className={styles.section}>
      <div className="section-inner">
        <p className="section-label">Cenovnik</p>
        <h2 className="section-title">Porudžbine i cene</h2>
        <div className="gold-divider">
          <span>✦</span>
        </div>
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
