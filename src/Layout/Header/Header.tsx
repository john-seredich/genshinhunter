import { Link } from "react-router-dom";
import { links } from "../../links";
import styles from "./Header.module.scss";

function Header() {
  const linkElement = links.map((link) => {
    return (
      <li key={link}>
        <Link to={link.toLowerCase()}>{link}</Link>
      </li>
    );
  });

  return (
    <header className={styles.header}>
      <h1>GenshinHunter</h1>
      <nav>
        <ul className={styles.nav}>{linkElement}</ul>
      </nav>
    </header>
  );
}

export default Header;
