import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Midhun Dominic. All rights reserved.</p>
          </div>
          
          <div className={styles.links}>
            <a href="mailto:midhundominic2002@gmail.com">Email</a>
            <a href="https://linkedin.com/in/midhundominic" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/midhundominic" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
