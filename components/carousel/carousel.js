import React from "react";
import styles from "./carousel.module.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import img1 from "./01.png";
import img2 from "./02.png";
import img3 from "./03.png";
import img4 from "./04.png";

export default function carousel() {
  return (
    <div className={styles.carousel}>
      <Carousel>
        <Carousel.Item interval={6000}>
          <div className={styles.carou}>
            <div className={styles.gauche}>
              <p>LET&apos;S MAKE THE BEST INVESTMENT</p>
              <h1>
                There Is No Friend AS <br />
                Loyal As A Book
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                deserunt animi odit at blanditiis molestias fugiat vero iure
                ducimus cumque.
              </p>
              <button>
                <span> Show now</span>
              </button>
            </div>
            <div className={styles.droite}>
              <Image
                src={img1}
                alt="Description de l'image"
                width={450}
                height={550}
              ></Image>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className={styles.carou}>
            <div className={styles.gauche}>
              <p>LET&apos;S MAKE THE BEST INVESTMENT</p>
              <h1>
                There Is No Friend AS <br />
                Loyal As A Book
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                deserunt animi odit at blanditiis molestias fugiat vero iure
                ducimus cumque.
              </p>
              <button>
                <span> Show now</span>
              </button>
            </div>
            <div className={styles.droite}>
              <Image
                src={img2}
                alt="Description de l'image"
                width={400}
                height={566}
              ></Image>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className={styles.carou}>
            <div className={styles.gauche}>
              <p>LET&apos;S MAKE THE BEST INVESTMENT</p>
              <h1>
                There Is No Friend AS <br />
                Loyal As A Book
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                deserunt animi odit at blanditiis molestias fugiat vero iure
                ducimus cumque.
              </p>
              <button>
                <span> Show now</span>
              </button>
            </div>
            <div className={styles.droite}>
              <Image
                src={img3}
                alt="Description de l'image"
                width={450}
                height={550}
              ></Image>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carou}>
            <div className={styles.gauche}>
              <p>LET&apos;S MAKE THE BEST INVESTMENT</p>
              <h1>
                There Is No Friend AS <br />
                Loyal As A Book
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                deserunt animi odit at blanditiis molestias fugiat vero iure
                ducimus cumque.
              </p>
              <button>
                <span> Show now</span>
              </button>
            </div>
            <div className={styles.droite}>
              <Image
                src={img4}
                alt="Description de l'image"
                width={400}
                height={566}
              ></Image>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
