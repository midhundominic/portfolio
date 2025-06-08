import styles from './project.module.css';

export default function Projects() {
  const projects = [
    {
      title: "Medicare (main)",
      subtitle: "Connecting Patients to healthcare providers",
      duration: "Jan 2024 - April 2025",
      description: [
        "Developed a MERN stack platform to connect patient and health care providers, offering features like online consultation, medicine delivery and laboratory service.",
        "Implemented Patient's, Doctors, Pharmacy and Laboratory modules for profile management, online consultation, Laboratory and Pharmacy services with a role-based dashboard using React.js and Node.js.",
        "Integrated OTP-based email verification using Nodemailer for secure user registration.",
        "Designed RESTful APIs for data management and ensured efficient database operations using MongoDB.",
        "Chatbot service for the patient to get all information about the website based OPENAI api.",
        "Streamlined admin-side management for overall monitor, and user activities with robust review capabilities.",
        "Implemented biometric authentication for secure and seamless user login"
      ]
    },
    {
      title: "Resort Reservation System (mini)",
      subtitle: "Website developed to manage booking",
      duration: "June 2023",
      description: [
        "Real-time Availability: Allows users to check the availability of rooms in real time based on selected dates.",
        "Online Booking: Users can securely reserve rooms by filling out a simple booking form and receiving instant confirmation.",
        "Admin Dashboard: Provides an intuitive dashboard for administrators to manage bookings, view customer data, and update room details."
      ]
    },
    {
      title: "Emotion Detection from Text (micro)",
      subtitle: "Android Application With Machine Learning",
      duration: "Oct 2024 - Oct 2024",
      description: [
        "Real-Time Emotion Detection: Uses Google ML Kit to detect the language of input text instantly.",
        "User-Friendly Interface: Simple UI for easy text input and language display."
      ]
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3>{project.title}</h3>
                <span className={styles.duration}>{project.duration}</span>
              </div>
              
              <p className={styles.subtitle}>{project.subtitle}</p>
              
              <ul className={styles.features}>
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
