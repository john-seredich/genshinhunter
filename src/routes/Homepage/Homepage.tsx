import styles from "./Homepage.module.scss";
import Header from "../../Layout/Header/Header";
import { Link } from "react-router-dom";
import { links } from "../../links";

function Homepage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2> Welcome, traveller.</h2>
        <p className={styles.container__desc}>
          Here you can find latest game news and various useful information,
          including info about characters, weapons, materials, and various other
          things, including tools for making your journey the best!
        </p>

        <p className={styles.container__action}>
          Use the icons above to explore the database or use these quick links!
        </p>
        <ul className={styles.container__qlinks}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={`/${link.route}`}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.container__events}>
          <h2>Latest Game Events </h2>
          <ul>
            <li>Second Blooming ( 31st Jan 23 - 13th Feb 23 ) </li>
            <li>The Exquisite Night Chimes ( 19th Jan 23 - 6th Feb 23 ) </li>
            <li>Ley Line Overflow ( 9th Jan 23 - 16th Jan 23 ) </li>
            <li>Across the Wilderness ( 3rd Jan 23 - 13th Jan 23 ) </li>
            <li>Windtrace ( 23rd Dec 22 - 6th Jan 23 ) </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Homepage;
