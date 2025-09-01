import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>WebStart Studio</h1>
      <nav className="nav">
        <a href="#about">Про нас</a>
        <a href="#projects">Проєкти</a>
        <a href="#contact">Контакти</a>
      </nav>
    </header>
  )
}
