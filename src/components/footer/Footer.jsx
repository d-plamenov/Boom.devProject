import styles from "./Footer.module.scss"
import {Button, InputBase, Paper, Grid, Container} from "@mui/material"
import Logo from "../logo/Logo"

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <Container>
                <Grid container>
                    <Grid item  md={2}>
                        <Logo type="muted"/>
                    </Grid>
                    <Grid item md={6} sx={{display: "flex"}}>
                        <p className={styles.copyright}>Bum All Rights Reserved 2021</p>
                    </Grid>
                    <Grid item md={4} sx={{display: "flex", justifyContent:"flex-end"}}>
                        <Button className={styles.menuItem} variant={"text"}>Privacy Policy</Button>
                        <Button className={styles.menuItem} variant={"text"}>Cookie Policy</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}