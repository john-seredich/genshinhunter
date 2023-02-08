import styles from "./Construction.module.scss";

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
    </div>
  );
}

export default Construction;
