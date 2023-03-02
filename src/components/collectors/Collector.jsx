import styles from "./Collector.module.scss";
import User from "../user/User";
import { Grid } from "@mui/material";

export default function Collector({ name = "", avatar = "", verified = false, type = "", id, nftsCount }) {
    const setStyles = (t) => t == "lighter" ? styles.light : styles.dark;
    return (
        <div className={styles.container}>
            <Grid container className={setStyles(type)}>
                <Grid item classname={styles.numberWrapper}>
                    <p className={styles.number}>{id}</p>
                </Grid>
                <Grid item>
                    <div className={styles.userWrapper}>
                    <User name={name} avatar={avatar} type={type} verified={verified} />
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}