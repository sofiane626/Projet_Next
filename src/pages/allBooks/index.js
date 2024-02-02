import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import styles from "../../styles/allBooks.module.css";
import { useRouter } from "next/router";
import { FaExpandArrowsAlt } from "react-icons/fa";

export default function AllBooks(props) {
  const [livresState, setLivresState] = useState(props.livres || []); // Vérifie si props.livres est défini avant de l'utiliser, sinon initialiser avec un tableau vide
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isThreeCardsPerRow, setIsThreeCardsPerRow] = useState(true);
  const router = useRouter();

  const pushFonction = (id) => {
    router.push(`/${id}`);
  };

  function isOnSearch(bookName) {
    return (
      bookName && bookName.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  function handleBtn01Click() {
    setIsThreeCardsPerRow(true);
  }

  function handleBtn02Click() {
    setIsThreeCardsPerRow(false);
  }

  function handleCategoryChange(e) {
    const category = e.target.getAttribute("data-category");
    if (selectedCategory === category) {
      return;
    }
    if (category === "All") {
      setLivresState(props.livres);
    } else {
      const filteredLivres = props.livres.filter(
        (livre) => livre.genres && livre.genres.includes(category)
      );
      setLivresState(filteredLivres);
    }
    setSelectedCategory(category);
  }

  function handleAuthorChange(e) {
    setSelectedAuthor(e.target.value);
    if (e.target.value === "") {
      setLivresState(props.livres);
    } else {
      const filteredLivres = props.livres.filter(
        (livre) => livre.authors === e.target.value
      );
      setLivresState(filteredLivres);
    }
  }

  function handleSortChange(e) {
    const value = e.target.value;
    let sortedLivres;
    if (value === "title-asc") {
      sortedLivres = livresState.slice().sort((a, b) => {
        if (!a.title || !b.title) return 0;
        return a.title.localeCompare(b.title);
      });
    } else if (value === "title-desc") {
      sortedLivres = livresState.slice().sort((a, b) => {
        if (!a.title || !b.title) return 0;
        return b.title.localeCompare(a.title);
      });
    } else if (value === "rating-desc") {
      sortedLivres = livresState.slice().sort((a, b) => b.rating - a.rating);
    } else if (value === "rating-asc") {
      sortedLivres = livresState.slice().sort((a, b) => a.rating - b.rating);
    } else {
      sortedLivres = props.livres;
    }
    setLivresState(sortedLivres);
  }

  useEffect(() => {
    setLivresState(props.livres || []); // Vérifie si props.livres est défini avant de l'utiliser, sinon initialiser avec un tableau vide
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [props.livres]);

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

  const cardClass = isThreeCardsPerRow
    ? styles.cardThreePerRow
    : styles.cardOnePerRow;

  return (
    <div className={styles.allBooks}>
      <NavBar onSearch={setInputValue}></NavBar>
      <div className={styles.box}>
        <div className={styles.filtre}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h2>Category</h2>
          <ul className={styles.ul}>
            <li onClick={handleCategoryChange} data-category="All">
              All
            </li>
            <li onClick={handleCategoryChange} data-category="Mystery">
              Mystery
            </li>
            <li onClick={handleCategoryChange} data-category="Fantasy">
              Fantasy
            </li>
            <li onClick={handleCategoryChange} data-category="Biography">
              Biography
            </li>
            <li onClick={handleCategoryChange} data-category="Religion">
              Religion
            </li>
            <li onClick={handleCategoryChange} data-category="Fiction">
              Fiction
            </li>
            <li onClick={handleCategoryChange} data-category="Historical">
              Historical
            </li>
            <li onClick={handleCategoryChange} data-category="Inspirational">
              Inspirational
            </li>
          </ul>
          <h2>Author</h2>
          <select value={selectedAuthor} onChange={handleAuthorChange}>
            <option value="">All Authors</option>
            {props.livres
              .map((livre) => livre.authors)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
          </select>
          <h2>Price</h2>
          <input type="range" />
        </div>
        <div className={styles.livres}>
          <div className={styles.top}>
            <div>
              <button
                className={styles.btn02}
                onClick={handleBtn01Click}
              ></button>
              <button
                className={styles.btn02}
                onClick={handleBtn02Click}
              ></button>
            </div>
            <div>
              <p>Product Available</p>
            </div>
            <div>
              <select name="sort" id="sort" onChange={handleSortChange}>
                <option value="">Trier par</option>
                <option value="title-asc">Titre A-Z</option>
                <option value="title-desc">Titre Z-A</option>
                <option value="rating-desc">Note élevé</option>
                <option value="rating-asc">Note basse</option>
              </select>
            </div>
          </div>
          <div className={styles.bot}>
            <div className={styles.Bibli}>
              {livresState &&
                livresState.slice().map((livre) =>
                  isOnSearch(livre.title) ? (
                    <div key={livre.id} className={styles.cartes}>
                      <div className={styles.back}>
                        <div
                          className={styles.img}
                          style={{
                            backgroundImage: `url('${livre.image_url}')`,
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
                            className={styles.btnAcheter}
                          >
                            <FaExpandArrowsAlt />
                          </button>
                        </div>
                        <div className={styles.details}>
                          <h2>{livre.title}</h2>
                          <p>Auteur: {livre.authors}</p>
                          <p>Rating: {livre.rating}</p>
                          <button>Ajouter aux favoris</button>
                        </div>
                      </div>
                      s
                    </div>
                  ) : null
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://example-data.draftbit.com/books");
  const data = await response.json();
  return {
    props: {
      livres: data,
    },
  };
}
