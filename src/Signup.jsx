import styles from "./Signup.module.css";
import blossom from "./assets/blossom-flower.svg";

export default function Signup() {
  return (
    <div className={styles.page}>
      <section className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get Started Now</h1>
        </div>
      </section>
      <section className={styles.right}>
        <img className={styles.blossom} src={blossom} alt="Blossom flower" />
      </section>
    </div>
  );
}
