import styles from "./Signup.module.css";
import blossom from "./assets/blossom-flower.svg";

export default function Signup() {
  return (
    <div className={styles.page}>
      <section className={styles.left}></section>
      <section className={styles.right}>
        <img className={styles.blossom} src={blossom} alt="Blossom flower" />
      </section>
    </div>
  );
}
