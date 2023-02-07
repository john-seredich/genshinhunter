import { Link } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import styles from "./ErrorPage.module.scss";

function ErrorPage() {
  return (
    <>
      <Header />
      <div className={styles.error}>
        <h1>404</h1>
        <p>OOPS! PAGE NOT FOUND</p>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed, name changed or is temporarily unavaliable.
        </p>
        <Link to="/">Homepage</Link>
      </div>
    </>
  );
}

export default ErrorPage;
