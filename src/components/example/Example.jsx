import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Header from "../header/Header";
import Avatar from "../avatar/Avatar";
import User from "../user/User";
import Card from "../card/Card";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      {/* <Header /> */}
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Card
          name="Clock"
          likes={0}
          mediaUrl="../images/nft.jpg"
          user={{avatar: {
            url: "",
          },
            verified: true,
          }}
          price={454545}
          currency="$"
        />
        {/* <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">
            Hi
          </Link>
        </Paper> */}
      </Container>
    </div>
  );
}
