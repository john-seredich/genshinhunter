import styles from "./Footer.module.scss";
import { HiArrowsUpDown } from "react-icons/hi2";

function Footer() {
  return (
    <footer className={styles.footer}>
      <button className={styles.footer__dropbtn}>Quality</button>
      <button className={styles.footer__orderbtn}>
        <HiArrowsUpDown />
      </button>
    </footer>
  );
}

export default Footer;
