import Avatar from "../avatar/Avatar";
import styles from "./User.module.scss";
export default function User({
  name = "pesho",
  info = "sajkl;fhasdjkg",
  avatar = "",
  size = 55,
  verified = false,
}) {
  return (
    <div className={styles.user}>
      <Avatar />
      <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  );
}
