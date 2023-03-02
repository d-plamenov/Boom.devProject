import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import _ from "lodash";
import CollectorColumn from "./CollectorColumn";
import styles from "./TopCollectors.module.scss"

export default function TopCollectors({ collectors = [] }) {
  collectors.map((collector, index) => (collector.id = index + 1));
  let chunkedCollectors = _.chunk(collectors, 3);
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={10}>
            <h1 className={styles.title}>Top Collectors</h1>
          </Grid>
          <Grid item xs={2} sx={{ display: "flex" }}>
            <FormControl fullWidth className={styles.select} size="small">
              <InputLabel id="select-label">Sort By</InputLabel>
              <Select labelId="select-label" value="Sort by">
                <MenuItem value={10}>Top this week</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {chunkedCollectors.map((cc, i) => (
            <Grid item key={i}>
              <CollectorColumn items={cc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
