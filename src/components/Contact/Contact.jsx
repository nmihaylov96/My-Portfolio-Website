import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to contact me!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:nikolaymihaylov1996@gmail.com">nikolaymihaylov1996@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                    <a href="linkedin.com/in/nikolay-mihaylov-ab6855259">linkedin.com/nikolay-mihaylov</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                    <a href="https://github.com/nmihaylov96">github.com/nmihaylov96</a>
                </li>
            </ul>
        </footer>
    );
}