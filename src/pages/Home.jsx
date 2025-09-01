import styles from './Home.module.css'

export default function Home() {
  return (
    <main>
      <section id="about" className={styles.section}>
        <h2>Про нас</h2>
        <p>
          Ласкаво просимо на WebStart Studio! Тут зібрані всі наші послуги та проєкти.
        </p>
      </section>

      <section id="projects" className={styles.projects}>
        <div className={styles.projectCard}>
          <h3>📄 Резюме</h3>
          <p>Опис послуги або проєкту.</p>
        </div>
        <div className={styles.projectCard}>
          <h3>📊 Лендинг</h3>
          <p>Опис послуги або проєкту.</p>
        </div>
        <div className={styles.projectCard}>
          <h3>🎯 Таргетинг</h3>
          <p>Опис послуги або проєкту.</p>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Контакти</h2>
        <p>Email: info@webstartstudio.com</p>
        <p>Телефон: +380 00 000 0000</p>
      </section>
    </main>
  )
}
