import { Grid, Typography, Paper, Box } from "@material-ui/core";
import Divider from './../Components/Divider';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from "@mui/material";

const useStyles = makeStyles( () => {

    const theme = useTheme();

    return {
        container: {
            overflow: 'hidden',
            backgroundColor: 'white',
            padding: theme.spacing(1),
        },
        image: {
            width: '100%',
            borderRadius: 20
        },
        addressContainer: {
            width: '100%',
            backgroundColor: '#F4F4F4',
            borderRadius: 10,
            color: '#878787'
        },
        containerDescription: {
            [theme.breakpoints.down('lg')]: {
                flexDirection: 'column'
            },
        },
        containerDescriptionDetail: {
            marginTop: theme.spacing(1)
        }
    }
});

const ItemEmpreendimento = function() {

    const classes = useStyles();

    return(
        <Paper className={classes.container}>
            <Grid container spacing={1}>
                <Grid item sm={12}  lg={4}>
                    <Box display="flex" alignItems="center" minHeight="100%">
                        <img src="/images/casa.jpg" className={classes.image} />
                    </Box>
                </Grid>
                <Grid item sm={12}  lg={8}>
                    <Box>
                        <Typography variant="h6">Casa de condomínio em goiânia - R$ 2.500,00</Typography>
                        <Box display="flex" marginTop={2} className={classes.containerDescription}>
                            <Box whiteSpace="nowrap">
                                <Typography variant="caption" component="p">Quartos: 3</Typography>
                                <Typography variant="caption" component="p">Vagas na garagem: 3</Typography>
                                <Typography variant="caption" component="p">Metragem: 19M²</Typography>
                                <Typography variant="caption" component="p">Banheiros: 3</Typography>
                                <Typography variant="caption" component="p">Condomínio: R$ 500,00</Typography>
                            </Box>
                            <Divider />
                            <Box className={classes.containerDescriptionDetail}>
                                <Typography variant="caption" component="p"><strong>Descrição</strong></Typography>
                                <Typography variant="caption" component="p">ce the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.addressContainer} padding={1} marginTop={1}>
                            <Typography>Rua T-28 - Setor Bueno</Typography>
                            <Typography>Em frente ao Mac Donalds da T-63</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ItemEmpreendimento;