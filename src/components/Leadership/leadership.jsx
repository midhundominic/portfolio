import styles from './leadership.module.css';

export default function Leadership() {
  const leadershipExperience = {
    title: "NSS Volunteer",
    role: "Volunteer",
    organization: "Government Higher Secondary School, Thrissilery, Kerala",
    duration: "Aug. 2019 – Mar. 2021",
    activities: [
      "Engaged in community service, health, sanitation, education, and environmental conservation activities.",
      "Organized events like blood donation drives, tree plantations, and health camps."
    ]
  };

  return (
    <section id="leadership" className={styles.leadership}>
      <div className={styles.container}>
        <h2 className={styles.title}>Leadership & Community Service</h2>
        
        <div className={styles.experienceCard}>
          <div className={styles.header}>
            <h3>{leadershipExperience.title}</h3>
            <span className={styles.duration}>{leadershipExperience.duration}</span>
          </div>
          
          <div className={styles.content}>
            <p className={styles.role}>{leadershipExperience.role}</p>
            <p className={styles.organization}>{leadershipExperience.organization}</p>
            
            <ul className={styles.activities}>
              {leadershipExperience.activities.map((activity, index) => (
                <li key={index}>
                  <span className={styles.bullet}>•</span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
