import styles from './skills.module.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Key Skills",
      skills: [
        "MERN Stack Development",
        "Database Management",
        "Algorithms and Data Structures",
        "Networking",
        "Virtualization",
        "Cloud Computing",
        "Requirement Gathering and Analyzing"
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        "JavaScript",
        "Node.js",
        "C",
        "PHP"
      ]
    },
    {
      title: "Database Tools",
      skills: [
        "MySQL Workbench",
        "MongoDB Compass",
        "MongoDB Atlas"
      ]
    },
    {
      title: "Development Tools",
      skills: [
        "Visual Studio Code",
        "Postman",
        "Figma",
        "GitHub",
        "GitLab",
        "Selenium",
        "Cucumber"
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Skills</h2>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>
                    <span className={styles.skillName}>{skill}</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: '90%' }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
