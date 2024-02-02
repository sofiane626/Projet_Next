import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { FaStar, FaRegWindowClose, FaTrashAlt } from "react-icons/fa";

export default function NavBar({ onSearch, favorites, onRemoveFavorite }) {
  const [active, setActive] = useState(false);
  const [fav, setFav] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <div className={styles.Nav}>
      <div className={styles.box}>
        <div className={active ? styles.activeSidenav : styles.sidenav}>
          <ul className={styles.ul}>
            <div className={styles.top}>
              <Link href={"/"} className={styles.lien2}>
                Bookshelf
              </Link>
              <div onClick={() => setActive(!active)} className={styles.fermer}>
                <div
                  className={active ? styles.activeHamburger : styles.hamburger}
                />
              </div>
            </div>
            <div className={styles.bot}>
              <li>Bookshelf Minimal</li>
              <li>Bookshelf Modern</li>
              <li>Bookshelf Classic</li>
              <Link href={"/allBooks"} className={styles.lien}>
                All Books
              </Link>
            </div>
          </ul>
        </div>
        <div className={styles.gauche}>
          <div onClick={() => setActive(!active)}>
            <div
              className={active ? styles.activeHamburger : styles.hamburger}
            />
          </div>
          <div>
            <p className={styles.titre}>BOOKSHELF.</p>
          </div>
        </div>
        <div className={styles.milieu}>
          <div className={styles.put}>
            <input
              type="text"
              placeholder="Search Your book here"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className={styles.droite}>
          <div>
            <p>+01234567890</p>
          </div>
          <div>
            <div onClick={() => setFav(!fav)} className={styles.but}>
              <FaStar />
            </div>
          </div>
        </div>
        <div className={fav ? styles.favActiv : styles.fav}>
          <ul className={styles.ul2}>
            <div className={styles.top2}>
              <div onClick={() => setFav(!fav)} className={styles.but}>
                <FaRegWindowClose />
              </div>
              <div className={styles.megaTop}>
                <h2>Your cart items</h2>
                <div class="container2">
                  <div class="box2">
                    <div class="line"></div>
                    <div class="line"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bot2}>
              <div className={styles.favorites}>
                <ul className={styles.jjj}>
                  {favorites &&
                    favorites.map((book) => (
                      <li key={book.id}>
                        <div className={styles.favo}>
                          <div
                            className={styles.imag}
                            style={{
                              backgroundImage: `url(${book.image_url})`,
                              height: "100%",
                              width: "100%",
                              objectFit: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className={styles.titr}>{book.title}</div>
                          <button
                            className={styles.trash}
                            onClick={() => onRemoveFavorite(book)}
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
