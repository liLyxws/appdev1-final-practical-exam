import styles from "./Login.module.css";
import blossom from "./assets/blossom-flower.svg";
import googleIcon from "./assets/icons-google-logo.svg";
import appleIcon from "./assets/icons-apple-logo.svg";

export default function Login() {
  return (
    <div className={styles.page}>
      <section className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>Enter your Credentials to access your accogit statusunt</p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.field}>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="Enter your email" className={styles.input} />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Name" className={styles.input} />
            </div>

            <label className={styles.checkRow}>
              <input type="checkbox" className={styles.checkbox} />
              <span>
                I agree to the <a href="#" className={styles.terms}>terms &amp; policy</a>
              </span>
            </label>

            <button type="submit" className={styles.submit}>Login</button>
          </form>

          <div className={styles.divider}>Or</div>

          <div className={styles.socials}>
            <button type="button" className={styles.socialBtn}>
              <img src={googleIcon} alt="" className={styles.socialIcon} />
              Sign in with Google
            </button>
            <button type="button" className={styles.socialBtn}>
              <img src={appleIcon} alt="" className={styles.socialIcon} />
              Sign in with Apple
            </button>
          </div>

          <p className={styles.bottom}>
            Have an account? <a href="#" className={styles.link}>Sign In</a>
          </p>
        </div>
      </section>
      <section className={styles.right}>
        <img className={styles.blossom} src={blossom} alt="Blossom flower" />
      </section>
    </div>
  );
}
