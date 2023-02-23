import styles from "./Avatar.module.scss";

export default function Avatar({ size = 90, url, verified = false }) {
  return (
    <div className={styles.avatar} style={{ width: size, height: size }}>
      <img
        src="/images/avatar.png"
        alt=""
        className={styles.image}
        style={{ width: "100%", height: "100%" }}
      />
      {verified && <img src="/images/verified.svg" alt="" className={styles.badge} />}
    </div>
  );
}
