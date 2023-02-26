import { CardContent, CardHeader, CardMedia, Chip } from "@mui/material";
import MuiCard from "@mui/material/Card";
import Avatar from "../avatar/Avatar";
import styles from "./Card.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import millify from "millify";

export default function Card({ name, likes, mediaUrl, user, price, currency }) {
  return (
    <MuiCard class={styles.card}>
      <CardHeader
              avatar={<Avatar size={ 35 } url={user.avatar.url} verified={user.verified} />}
      />
      <CardMedia component="img" image={mediaUrl} className={styles.media} />
      <CardContent className={styles.cardContent}>
        <div className={styles.info}>
          <p className={styles.title}>{name}</p>
          <p className={styles.price}>{`${millify(price)} ${currency}`}</p>
        </div>
        <Chip
          className={styles.likes}
          icon={<FavoriteIcon className={styles.icon} />}
          label={millify(likes)}
          variant="outlined"
        />
      </CardContent>
    </MuiCard>
  );
}
