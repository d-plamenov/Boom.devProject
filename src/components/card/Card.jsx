import { Badge, CardContent, CardHeader, CardMedia, Chip } from "@mui/material";
import MuiCard from "@mui/material/Card";
import Avatar from "../avatar/Avatar";
import styles from "./Card.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircleIcon from "@mui/icons-material/Circle";
import millify from "millify";
import Countdown from "react-countdown";

export default function Card({
  name,
  likes = 0,
  mediaUrl,
  user,
  price,
  currency,
  timeLeft,
}) {
  return (
    <MuiCard class={styles.card}>
      <CardHeader
        avatar={
          <Avatar size={35} url={user.avatar.url} verified={user.verified} />
        }
      />
      <CardMedia component="img" image={mediaUrl} className={styles.media} />
      {timeLeft && (
        <div className={styles.liveWrapper}>
          <Badge className={styles.badge}>
            <CircleIcon className={styles.circle} />
            LIVE
          </Badge>
          <div className={styles.countdown}>
            <Countdown date={Date.now() + timeLeft}/>
          </div>
        </div>
      )}
      <CardContent className={styles.cardContent}>
        <div className={styles.info}>
          <p className={styles.title}>{name}</p>
          <p className={styles.price}>
            ~{price} {currency}
          </p>
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
