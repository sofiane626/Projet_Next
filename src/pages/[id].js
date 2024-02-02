import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "../styles/id.module.css";
import { useState, useEffect } from "react";

export default function Id(props) {
  const [livre, setLivre] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  
  if (loading) {
    return (
      <div className={styles.load}>
        <div className={styles.wrapper}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.shadow}></div>
          <div className={styles.shadow}></div>
          <div className={styles.shadow}></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${props.livreActuel.image_url})`,
            height: "100%",
            width: "50%",
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
        <div className={styles.details}>
          <h2>{props.livreActuel?.title}</h2>
          <p>Auteur: {props.livreActuel?.authors}</p>
          <p>Description: {props.livreActuel?.description}</p>
          <p>Edition: {props.livreActuel?.edition}</p>
          <p>Format: {props.livreActuel?.format}</p>
          <p>Nombre de pages: {props.livreActuel?.num_pages}</p>
          <p>Rating: {props.livreActuel?.rating}</p>
          <p>Nombre de ratings: {props.livreActuel?.rating_count}</p>
          <p>Nombre de reviews: {props.livreActuel?.review_count}</p>
          <p>Genres: {props.livreActuel?.genre_list}</p>
          <p>Quote 1: {props.livreActuel?.Quote1}</p>
          <p>Quote 2: {props.livreActuel?.Quote2}</p>
          <p>Quote 3: {props.livreActuel?.Quote3}</p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.id;
  const response = await fetch("https://example-data.draftbit.com/books");
  const data = await response.json();
  const livreActuel = data.find((livre) => livre.id.toString() === slug);
  if (!livreActuel) {
    return { notFound: true };
  }
  
  return {
    props: {
      livreActuel,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://example-data.draftbit.com/books");
  const data = await response.json();
  console.log(response);
  const paths = data.map((livre) => ({
    params: { id: livre.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
