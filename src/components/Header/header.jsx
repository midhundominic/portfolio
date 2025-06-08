import { useState, useEffect } from 'react';
import styles from './header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>MD</a>
        
        <button className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#leadership">Leadership</a>
          {/* <a href="#contact">Contact</a> */}
        </nav>
      </div>
    </header>
  );
}
