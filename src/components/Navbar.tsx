'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

type NavLink = { href: string; label: string; scroll?: boolean }

const homeLinks: NavLink[] = [
  { href: '#about',        label: 'O meni',   scroll: true },
  { href: '#contact',      label: 'Kontakt',  scroll: true },
  { href: '/ikonopisanje', label: 'Ikone'                  },
  { href: '/portreti',     label: 'Portreti'               },
]

const ikoneLinks: NavLink[] = [
  { href: '/',         label: '← Početna'              },
  { href: '#gallery',  label: 'Galerija', scroll: true  },
  { href: '#prices',   label: 'Cenovnik', scroll: true  },
  { href: '#contact',  label: 'Kontakt',  scroll: true  },
]

const portretiLinks: NavLink[] = [
  { href: '/',         label: '← Početna'              },
  { href: '#gallery',  label: 'Galerija', scroll: true  },
  { href: '#prices',   label: 'Cenovnik', scroll: true  },
  { href: '#contact',  label: 'Kontakt',  scroll: true  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const links =
    pathname === '/ikonopisanje' ? ikoneLinks :
    pathname === '/portreti'    ? portretiLinks :
    homeLinks

  const logoHref  = pathname === '/' ? '#hero' : '/'
  const logoLabel =
    pathname === '/ikonopisanje' ? '✝ Ikonopisanje' :
    pathname === '/portreti'     ? '◈ Portreti'     :
    '✝ ◈ Srđan A. Lazić'

  const renderLink = (l: NavLink) =>
    l.scroll
      ? <a key={l.href} href={l.href} className={styles.link} onClick={close}>{l.label}</a>
      : <Link key={l.href} href={l.href} className={styles.link} onClick={close}>{l.label}</Link>

  return (
    <nav className={styles.nav}>
      <a href={logoHref} className={styles.logo}>{logoLabel}</a>

      <ul className={styles.links}>
        {links.map(l => <li key={l.href}>{renderLink(l)}</li>)}
      </ul>

      <button
        className={styles.burger}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Zatvori meni' : 'Otvori meni'}
        aria-expanded={open}
      >
        <span className={`${styles.burgerLine} ${open ? styles.burgerTop : ''}`} />
        <span className={`${styles.burgerLine} ${open ? styles.burgerMid : ''}`} />
        <span className={`${styles.burgerLine} ${open ? styles.burgerBot : ''}`} />
      </button>

      {open && (
        <div className={styles.dropdown}>
          {links.map(l =>
            l.scroll
              ? <a key={l.href} href={l.href} className={styles.dropLink} onClick={close}>{l.label}</a>
              : <Link key={l.href} href={l.href} className={styles.dropLink} onClick={close}>{l.label}</Link>
          )}
        </div>
      )}
    </nav>
  )
}
