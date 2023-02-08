import styles from "./Construction.module.scss";
import { Link } from "react-router-dom";

function Construction() {
  return (
    <div className={styles.construction}>
      <h2>This page is under construction 🔨 </h2>
      <p>You can find information about the status on our Github repository!</p>
      <a
        href="https://github.com/john-seredich/genshinhunter"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <Link to="/">Homepage</Link>
    </div>
  );
}

export default Construction;
