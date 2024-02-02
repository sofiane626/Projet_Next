import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import image1 from "./card1.jpg";
import image2 from "./card2.jpg";

export default function card() {
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <div className={styles.carte}>
          <div className={styles.gauche}>
            <Image
              src={image1}
              alt="Description de l'image"
              width={330}
              height={220}
            ></Image>
          </div>
          <div className={styles.droite}>
            <p>SALE UP TO 15%</p>
            <p>
              Innovation in Eduction <br />
              (Hardcover)
            </p>
            <p>Starting at: $65.09</p>
          </div>
        </div>
        <div className={styles.carte}>
          <div className={styles.gauche}>
            <Image
              src={image2}
              alt="Description de l'image"
              width={330}
              height={220}
            ></Image>
          </div>
          <div className={styles.droite}>
            <p>SALE UP TO 10%</p>
            <p>
              Innovation in Eduction <br />
              (Hardcover)
            </p>
            <p>Starting at: $50.09</p>
          </div>
        </div>
      </div>
    </div>
  );
}
