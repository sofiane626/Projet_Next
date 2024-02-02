import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/carousel/carousel";
import Card from "../../components/card/card";
import Social from "../../components/social/social";
import Footer from "../../components/footer/footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import style from "@/styles/bibli.module.css";
import { FaExpandArrowsAlt } from "react-icons/fa";

export default function Home(props) {
  const [inputValue, setinputValue] = useState("");

  const router = useRouter();
  console.log(props.livres);
  const [livres, setLivres] = useState(props.livres);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(8); // afficher 8 livres au départ
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/connexion");
    }
    setLivres(props.livres);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [props.livres, router]);

  const pushFonction = (id) => {
    router.push(`/${id}`);
  };

  const addToFavorites = (livre) => {
    if (!favorites.find((book) => book.id === livre.id)) {
      setFavorites([...favorites, livre]);
    }
  };

  const handleRemoveFavorite = (livre) => {
    const updatedFavorites = favorites.filter((book) => book.id !== livre.id);
    setFavorites(updatedFavorites);
  };

  if (router.isFallback || loading) {
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

  function isOnSearch(bookName) {
    return bookName.toLowerCase().includes(inputValue.toLowerCase());
  }

  const showMoreButton =
    13 > displayCount ? (
      <button
        className={styles.btnMore}
        onClick={() => setDisplayCount(displayCount + 4)}
      >
        <span>Afficher plus</span>
      </button>
    ) : null;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar
          onSearch={setinputValue}
          favorites={favorites}
          onRemoveFavorite={handleRemoveFavorite}
        />
        <Carousel></Carousel>
        <Card></Card>
        <div className={style.bibli}>
          <div className={style.box}>
            <div className={style.titre}>
              <p>BOOKS GALLERY</p>
              <h2>Popular Books</h2>
              <div class="container2">
                <div class="box2">
                  <div class="line"></div>
                  <div class="line"></div>
                </div>
              </div>
            </div>
            <div className={style.Bibli}>
              {livres &&
                livres.slice(0, displayCount).map((livre) =>
                  isOnSearch(livre.title) ? (
                    <div key={livre.id} className={style.cartes}>
                      <div className={style.back}>
                        <div
                          className={style.img}
                          style={{
                            backgroundImage: `url(${livre.image_url})`,
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        >
                          <button
                            onClick={() => pushFonction(livre.id)}
                            className={style.btnAcheter}
                          >
                            <FaExpandArrowsAlt />
                          </button>
                        </div>
                        <div className={style.details}>
                          <h2>{livre.title}</h2>
                          <p>Auteur: {livre.authors}</p>
                          <p>Rating: {livre.rating}</p>
                          <button onClick={() => addToFavorites(livre)}>
                            Ajouter aux favoris
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              <div className={style.megabox}>{showMoreButton}</div>
            </div>
          </div>
        </div>
        <Social></Social>
        <Footer></Footer>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://example-data.draftbit.com/books");
  const data = await response.json();
  const sortedLivres = data.sort((a, b) => b.rating - a.rating);
  console.log(sortedLivres);
  return {
    props: {
      livres: sortedLivres,
    },
  };
}
