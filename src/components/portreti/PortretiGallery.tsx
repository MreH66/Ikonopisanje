import Image from "next/image";
import { supabase } from "@/lib/supabase";
import styles from "./PortretiGallery.module.css";

type Portrait = {
  id: number;
  size: string | null;
  image_url: string;
  sort_order: number | null;
};

async function getPortraits(): Promise<Portrait[]> {
  const { data, error } = await supabase
    .from("portraits")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Supabase error:", error.message);
    return [];
  }
  return data ?? [];
}

export default async function PortretiGallery() {
  const portraits = await getPortraits();

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Radovi</p>
        <h2 className={styles.title}>Galerija portreta</h2>
        <div className={styles.divider} />

        {portraits.length === 0 ? (
          <p className={styles.empty}>Galerija se priprema — uskoro.</p>
        ) : (
          <div className={styles.grid}>
            {portraits.map((p) => (
              <article key={p.id} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image
                    src={p.image_url}
                    alt={"Pictrue person"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.img}
                  />
                </div>
                <div className={styles.info}>
                  {p.size && <p className={styles.size}>{p.size}</p>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
