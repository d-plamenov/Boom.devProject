import { Button, Grid } from "@mui/material";
import styles from "./How.module.scss";
import Step from "./Step";

export default function How({description, title, items=[], link}) {
    return (
        <div className={styles.how}>
            <Grid container className={styles.info}>
                <Grid item xs={6}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                    <Button variant="contained" href={link} className={styles.button}>Learn More</Button>
                </Grid>
                <Grid item xs={4}>
                    {items.map((item, index) => (
                        <Step key={index} number={ index+1} {...item} />
                    ))}
                </Grid>
            </Grid>
        </div>


    )
}