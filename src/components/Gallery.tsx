import Image from 'next/image'
import { supabase, type Icon } from '@/lib/supabase'
import styles from './Gallery.module.css'

async function getIcons(): Promise<Icon[]> {
  const { data, error } = await supabase
    .from('icons')
    .select('*')
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('Supabase error:', error.message)
    return []
  }
  return data ?? []
}

export default async function Gallery() {
  const icons = await getIcons()

  return (
    <section id="gallery" className={styles.section}>
      <div className="section-inner">
        <p className="section-label">Radovi</p>
        <h2 className="section-title">Galerija ikona</h2>

        <div className="gold-divider"><span>✦</span></div>

        {icons.length === 0 ? (
          <p className={styles.empty}>
            Galerija se priprema — uskoro.
          </p>
        ) : (
          <div className={styles.grid}>
            {icons.map(icon => (
              <article key={icon.id} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image
                    src={icon.image_url}
                    alt={icon.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.img}
                  />
                </div>
                <div className={styles.info}>
                  <p className={styles.name}>{icon.title}</p>
                  {icon.description && (
                    <p className={styles.desc}>{icon.description}</p>
                  )}
                  {icon.size && (
                    <p className={styles.size}>{icon.size}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
