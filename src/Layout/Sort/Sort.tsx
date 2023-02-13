import styles from "./Sort.module.scss";

function Sort(props: any) {
  const clickHandler = () => {
    if (props.sort === "asc") {
      props.setSort("desc");
    } else {
      props.setSort("asc");
    }
  };

  return (
    <div className={styles.footer}>
      <button className={styles.footer__dropbtn} onClick={clickHandler}>
        Sort
      </button>
    </div>
  );
}

export default Sort;
