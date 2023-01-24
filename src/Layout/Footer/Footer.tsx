import styles from "./Footer.module.scss";
import { HiArrowsUpDown } from "react-icons/hi2";

function Footer(props: any) {
  const clickHandler = () => {
    if (props.sort === "asc") {
      props.setSort("desc");
    } else {
      props.setSort("asc");
    }
  };

  return (
    <footer className={styles.footer}>
      <button className={styles.footer__dropbtn}>Quality</button>
      <button className={styles.footer__orderbtn} onClick={clickHandler}>
        <HiArrowsUpDown />
      </button>
    </footer>
  );
}

export default Footer;
