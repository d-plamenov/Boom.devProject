import { Button, InputBase, Paper, Grid, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../logo/logo";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Container>
        <Grid container>
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Paper
              sx={{
                p: "0.625rem",
                display: "flex",
                alignItems: "center",
                width: "36.25rem",
              }}
            >
              <SearchIcon />
              <InputBase
                className={styles.searchInput}
                placeholder="Find items, users and activities"
              />
            </Paper>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button className={styles.menuBtn} variant="text">
              Home
            </Button>
            <Button className={styles.menuBtn} variant="text">
              Activity
            </Button>
            <Button className={styles.menuBtn} variant="contained">
              EXPLORE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
