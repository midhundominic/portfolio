import styles from './about.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I am a passionate MERN Stack Developer with a strong foundation in computer science and a 
              Master's degree in Computer Applications (CGPA: 8.9) from Amal Jyothi College of Engineering.
            </p>
            <p>
              My academic journey includes a Bachelor's degree in Computer Applications (CGPA: 7.9) from 
              SB College of Management Studies, where I built a strong foundation in programming and software development.
            </p>
          </div>

          <div className={styles.education}>
            <h3>Education</h3>
            <div className={styles.educationItem}>
              <h4>Master of Computer Application</h4>
              <p>Amal Jyothi College of Engineering (Autonomous)</p>
              <p>CGPA: 8.9</p>
              <span>Sept. 2023 – April 2025</span>
            </div>

            <div className={styles.educationItem}>
              <h4>Bachelor of Computer Application</h4>
              <p>SB College of Management Studies</p>
              <p>CGPA: 7.9</p>
              <span>June 2020 – August 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
