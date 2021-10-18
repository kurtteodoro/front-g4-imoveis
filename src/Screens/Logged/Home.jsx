import { Box, Typography, Grid, Paper } from "@material-ui/core";
import ItemEmpreendimento from "../../Components/ItemEmpreendimento";

const Home = function() {

    return(
        <Box>
            <Typography>250 Imóveis em Goiânia</Typography>

            <Grid container spacing={1}>
                <Grid item xs={12} lg={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <ItemEmpreendimento />
                        </Grid>
                        <Grid item xs={12}>
                            <ItemEmpreendimento />
                        </Grid>
                        <Grid item xs={12}>
                            <ItemEmpreendimento />
                        </Grid>
                        <Grid item xs={12}>
                            <ItemEmpreendimento />
                        </Grid>
                        <Grid item xs={12}>
                            <ItemEmpreendimento />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Box>
                        <Paper style={{backgroundColor: 'white'}}>
                            <Paper style={{backgroundColor: '#01AEE1', color: 'white'}}>
                                <Box py={2}>
                                    <Typography align="center">Procure o imóvel perfeito no mapa</Typography>
                                </Box>
                            </Paper>
                            <Box width="100%" height={300}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7642.851700421894!2d-49.278000372956214!3d-16.705590527924034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1244f2763b1%3A0xbd5264bcc4a1d28b!2sParque%20Vaca%20Brava!5e0!3m2!1spt-BR!2sbr!4v1634572124409!5m2!1spt-BR!2sbr" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );

}

export default Home;