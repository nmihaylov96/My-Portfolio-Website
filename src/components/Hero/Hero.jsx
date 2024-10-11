import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl} from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Nikolay</h1>
                <p className={styles.description}>I am a computer scientist with 3 years of experience using React.js, Node.js, Java, Python, C#, AI, MySQL and MongoDB. 
                    Reach out if you'd like to learn more about my skills.</p>
                <a href="mailto:nikolaymihaylov@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}