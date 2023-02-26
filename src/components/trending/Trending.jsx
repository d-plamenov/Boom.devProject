import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Card from "../card/Card";
import styles from "./Trending.module.scss";

export default function Trending({ cards = [] }) {
  return (
    <div className={styles.trending}>
      <Container>
        <Grid container className={styles.headerContainer}>
          <Grid item xs={10}>
            <h1 className="">Trending</h1>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
              <Select>
                <MenuItem value={10}>This week</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={1} className={styles.cardContainer}>
          {cards.map((card, index) => (
            <Grid item xs={3} key={index}>
              <Card {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
