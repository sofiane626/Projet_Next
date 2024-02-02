import React from "react";
import styles from "./footer.module.css";
import { FaLayerGroup, FaRegLifeRing } from "react-icons/fa";

export default function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.box}>
        <div className={styles.haut}>
          <div className={styles.gauche}>
            <div className={styles.font}>
              <FaLayerGroup />
            </div>
            <div className={styles.help}>
              <h3>Book Information?</h3>
              <p>Please send us an email a support@gmail.com</p>
            </div>
          </div>
          <div className={styles.droite}>
            <div className={styles.font}>
              <FaRegLifeRing />
            </div>
            <div className={styles.help}>
              <h3>Need Help?</h3>
              <p>Please call at 0123456789</p>
            </div>
          </div>
        </div>
        <div className={styles.bas}>
          <div className={styles.titre}>
            <h2>Bookshelf</h2>
          </div>
          <div className={styles.c}>
            <p>© 2023 All right reserved. Made with love by ThemeAtelier</p>
          </div>
        </div>
      </div>
    </div>
  );
}
