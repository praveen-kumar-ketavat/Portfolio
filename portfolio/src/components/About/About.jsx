import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Designing responsive, accessible, and visually appealing
                interfaces for seamless user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>FullStack Developer</h3>
              <p>
                Developing scalable web applications with robust back-end
                systems and dynamic front-end features.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>ServiceNow Developer</h3>
              <p>
                Creating custom applications, automating workflows, and
                optimizing ITSM processes on ServiceNow.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
