"use client";
import { useState } from "react";
import content from "../../../content.json";
import styles from "./HomeContact.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function HomeContact() {
  const { email, phone } = content.home.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY_HERE",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="section-inner">
        <p className="section-label">Kontakt</p>
        <h2 className="section-title">Stupite u kontakt</h2>

        <div className="gold-divider">
          <span>✦</span>
        </div>

        <div className={styles.grid}>
          {/* Info */}
          <div className={styles.info}>
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

          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Vaše ime"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email adresa"
              required
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className={styles.input}
            />
            <textarea
              rows={5}
              placeholder="Poruka — opišite šta želite..."
              required
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              className={styles.textarea}
            />

            <button
              type="submit"
              className={styles.btn}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Šalje se..." : "Pošalji poruku"}
            </button>

            {status === "sent" && (
              <p className={styles.success}>Poruka je poslata. Hvala!</p>
            )}
            {status === "error" && (
              <p className={styles.error}>
                Došlo je do greške. Pokušajte ponovo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
