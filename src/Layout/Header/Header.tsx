import { Link } from "react-router-dom";
import { links } from "../../links";
import styles from "./Header.module.scss";
import img from "../../assets/images/Icon_Inventory_Weapons.webp";

function Header() {
  const linkElement = links.map((link) => {
    return (
      <li key={link.id}>
        <Link to={link.name.toLowerCase()}>
          <img src={link.img} alt="" />
        </Link>
      </li>
    );
  });

  return (
    <header className={styles.header}>
      <h1>GenshinHunter</h1>
      <nav>
        <ul className={styles.header__ul}>{linkElement}</ul>
      </nav>
    </header>
  );
}

export default Header;
