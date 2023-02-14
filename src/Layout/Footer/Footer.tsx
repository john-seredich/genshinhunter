import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        GenshinHunter is not affiliated with HoYoverse. Genshin Impact, game
        content and materials are trademarks and copyrights of HoYoverse.
      </p>
      <p>
        If you find any bugs, a report on GitHub would be appreciated, you can
        find the link below.
      </p>
      <a href="https://github.com/john-seredich/genshinhunter">Github</a>
    </footer>
  );
}

export default Footer;
