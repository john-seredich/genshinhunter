import { Link } from "react-router-dom";
import { links } from "../../links";
import { useState } from "react";
import styles from "./Header.module.scss";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenuHandler = () => setMenuToggle((prevToggle) => !prevToggle);

  const linkElement = links.map((link) => {
    return (
      <li key={link.id}>
        <Link to={`/${link.route}`}>
          <img src={link.img} alt="" />
        </Link>
      </li>
    );
  });

  return (
    <>
      <header className={styles.header}>
        <h1>GenshinHunter</h1>
        <nav>
          <ul className={styles.header__ul}>{linkElement}</ul>
          <button className={styles.header__btn} onClick={toggleMenuHandler}>
            <FaBars />
          </button>
        </nav>
      </header>
      {menuToggle && <p>Menu Toggled</p>}
    </>
  );
}

export default Header;
