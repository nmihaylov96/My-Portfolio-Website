import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
            alt="Me coding on a laptop" 
            className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>As a Frontend Developer, I specialize in building responsive and user-friendly web applications using React.js. 
                            I have a strong understanding of HTML, CSS, and JavaScript, which allows me to create dynamic, interactive interfaces. 
                            My goal is to deliver smooth and engaging user experiences across different devices and screen sizes.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>As a Backend Developer, I focus on server-side development, database management, and API integration. 
                            I have experience working with MySQL for designing, optimizing, and managing databases, ensuring efficient data handling and security. 
                            I also work with backend technologies such as Node.js and Express to build scalable, secure server architectures.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}