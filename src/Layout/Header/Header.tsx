import { Link, useLocation } from "react-router-dom";
import { links } from "../../links";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  const { width } = useWindowDimensions();
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenuHandler = () => setMenuToggle((prevToggle) => !prevToggle);

  // Mobile Menu Disabled when exceeds 765px
  useEffect(() => {
    if (width > 1000) setMenuToggle(false);
  }, [width, setMenuToggle]);

  // Dynamic Link element to detect current active page.
  const linkElement = links.map((link) => {
    let currentImage: any;
    if (currentPath === link.route) {
      currentImage = (
        <img key={link.id} className={styles.active} src={link.img} alt="" />
      );
    } else {
      currentImage = <img key={link.id} src={link.img} alt="" />;
    }

    return (
      <li key={link.id}>
        <Link to={`/${link.route}`}>{currentImage}</Link>
      </li>
    );
  });

  // Mobile Menu Element
  const MobileMenu = () => {
    return (
      <nav className={styles.mobile_menu}>
        <ul>{linkElement}</ul>
      </nav>
    );
  };

  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to="/">GenshinHunter</Link>
        </h1>
        <nav>
          <ul className={styles.header__ul}>{linkElement}</ul>
          {/* <button className={styles.header__btn} onClick={toggleMenuHandler}>
            <FaBars />
          </button> */}
          <button className={styles.header__btn} onClick={toggleMenuHandler}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
      {menuToggle && <MobileMenu />}
    </>
  );
}

export default Header;
