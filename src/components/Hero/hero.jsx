import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src="https://drive.google.com/uc?export=view&id=1HQqFP89n2yggNTpF2710-qgCO4GaaRJ1"
              alt="Midhun Dominic"
              className={styles.profileImage}
            />
          </div>
          <h1>Midhun Dominic</h1>
          <h2>MERN Stack Developer</h2>
          <p>Wayanad, Kerala, India</p>
          <p className={styles.tagline}>
            Connecting technology with healthcare and business solutions.
          </p>
          <div className={styles.links}>
            <a
              href="mailto:midhundominic2002@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/midhundominic"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/midhundominic"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <a
            className={styles.projectBtn}
            href="https://mediclouds.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Main Project: Medicloud
          </a>
        </div>
      </div>
    </section>
  );
}
