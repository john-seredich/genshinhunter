import { Link } from "react-router-dom";
import { links } from "../../links";
import styles from "./Header.module.scss";
import { FaBars } from "react-icons/fa";

function Header() {
  const linkElement = links.map((link) => {
    return (
      <li key={link.id}>
        <Link to={`/${link.name.toLowerCase()}`}>
          <img src={link.img} alt="" />
        </Link>
      </li>
    );
  });

  const mobileMenu = () => {
    return <ul>{linkElement}</ul>;
  };

  return (
    <header className={styles.header}>
      <h1>GenshinHunter</h1>
      <nav>
        <ul className={styles.header__ul}>{linkElement}</ul>
        <button className={styles.header__btn}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
}

export default Header;
