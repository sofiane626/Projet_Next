import React from "react";
import styles from "./social.module.css";
import Image from "next/image";
import img10 from "./cover-1.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function social() {
  return (
    <div className={styles.social}>
      <div className={styles.box}>
        <div className={styles.card}>
          <div className={styles.gauche}>
            <Image src={img10} alt="Description de l'image" width={600} height={700}></Image>
          </div>
          <div className={styles.droite}>
            <h2>Join Our Community</h2>
            <p>Sign up & get 10% of your first books.</p>
            <div className={styles.input}>
              <input type="email" required placeholder="Your email" />
              <button type="submit">
                <span>Subscribe</span>
              </button>
            </div>
            <div className={styles.bulles}>
              <div className={styles.bulle}>
                <FaFacebookF />
              </div>
              <div className={styles.bulle}>
                <FaTwitter />
              </div>
              <div className={styles.bulle}>
                <FaInstagram />
              </div>
              <div className={styles.bulle}>
                <FaLinkedinIn />
              </div>
              <div className={styles.bulle}>
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
