import { Grid } from "@mui/material";
import styles from "./Step.module.scss";

export default function Step({number=1, title="title", description="sdfgsdgshffasdfhehe"}) {
    return (
        <div className={styles.step}>
            <Grid container>
            <Grid item xs={4} className={styles.numberWrapper}>
                    <p className={styles.number}>{number}</p>
                </Grid>
                <Grid item xs={8} className={styles.infoWrapper}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </Grid>
            </Grid>
        </div>

    )
}