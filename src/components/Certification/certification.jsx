import styles from './certification.module.css';

export default function Certifications() {
  const certifications = {
    highly_relevant: [
      "Android Application Development",
      "Java Foundations (Oracle)",
      "Machine Learning Algorithms",
      "2 Days Workshop on React Js",
      "Data Structure in C",
      "The Joy of Computing Using Python (NPTEL)",
      "Basics of Computer Network",
      "Introduction to Patent (WIPO)",
      "Business Analyst Certification"
    ],
    additional: [
      "Basics of Computer Networks",
      "Data Structure in C",
      "Introduction to Patent (WIPO)"
    ]
  };

  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.container}>
        <h2 className={styles.title}>Certifications</h2>
        
        <div className={styles.certificationGrid}>
          <div className={styles.certificationCategory}>
            <h3>Highly Relevant Certifications</h3>
            <div className={styles.certList}>
              {certifications.highly_relevant.map((cert, index) => (
                <div key={index} className={styles.certCard}>
                  <div className={styles.certIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15l-2-2h4l-2 2zm0 0v5M5 7.5v-3a2 2 0 012-2h10a2 2 0 012 2v3M5 7.5h14M5 7.5v9a2 2 0 002 2h10a2 2 0 002-2v-9" />
                    </svg>
                  </div>
                  <p>{cert}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.certificationCategory}>
            <h3>Additional Certifications</h3>
            <div className={styles.certList}>
              {certifications.additional.map((cert, index) => (
                <div key={index} className={styles.certCard}>
                  <div className={styles.certIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15l-2-2h4l-2 2zm0 0v5M5 7.5v-3a2 2 0 012-2h10a2 2 0 012 2v3M5 7.5h14M5 7.5v9a2 2 0 002 2h10a2 2 0 002-2v-9" />
                    </svg>
                  </div>
                  <p>{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
