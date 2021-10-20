import { Box, Typography, Grid, Paper, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { useTheme } from "@mui/material";
import { useState } from "react";
import CustomInput1 from "../Components/CustomInput1";

const useStyles = makeStyles( () => {

    const theme = useTheme();

    return {
        container: {
            backgroundImage: 'url("/images/ocean-water.jpg") !important',
            minWidth: '100vw',
            minHeight: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },
        containerAzul: {
            backgroundColor: 'rgba(1, 174, 225, 0.9)',
            minWidth: '100vw',
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        card: {
            // backgroundColor: 'rgba(253, 118, 35, 1)',
            // backgroundColor: 'white',
            // width: '30%',
            [theme.breakpoints.up('xs')]: {
                width: '90%'
            },
            [theme.breakpoints.up('md')]: {
                width: '60%'
            },
            [theme.breakpoints.up('lg')]: {
                width: '30%'
            },
        },
        cadastroTxt: {
            textDecoration: 'underline',
            cursor: 'pointer'
        },
        logo: {
            width: '50%'
        }        
    }
});
const Login = function() {

    const classes = useStyles();
    const [loginScreen, setLoginScreen] = useState(true);

    const handleChangeCadastro = function() {
        setLoginScreen(!loginScreen);
    }

    return(
        <Box className={classes.container}>
            <Box className={classes.containerAzul}>

                <Paper className={classes.card}>
                    
                    <Box padding={3} textAlign="center">
                        <img src="/images/logo.png" className={classes.logo} />
                    </Box>

                    <Box padding={2}>
                        <Grid container>
                            {
                                loginScreen ?
                                <Grid item xs={12}>
                                    <form>
                                        <Box mb={2}>
                                            <Typography align="center" variant="h5">Faça login</Typography>
                                        </Box>
                                        <Box marginBottom={2}>
                                            <CustomInput1 required placeholder="E-mail" />
                                        </Box>
                                        <Box marginBottom={2}>
                                            <CustomInput1 required placeholder="Senha" />
                                        </Box>
                                        <Button type="submit" variant="contained" fullWidth color="primary" style={{backgroundColor: '#01AEE1'}}>Entrar</Button>
                                        <Box marginTop={2}>
                                            <Typography align="center"><a target="_Blank" href="">Esqueci minha senha</a></Typography>
                                            <Typography align="center" className={classes.cadastroTxt} onClick={handleChangeCadastro} >Cadastrar como corretor</Typography>
                                        </Box>
                                    </form>
                                </Grid>
                                :
                                <Grid item xs={12}>
                                    <form>
                                        <Box mb={2}>
                                            <Typography align="center" variant="h5">Criar conta</Typography>
                                        </Box>
                                        <Box marginBottom={2}>
                                            <CustomInput1 required placeholder="Nome" />
                                        </Box>
                                        <Box marginBottom={2}>
                                            <CustomInput1 required placeholder="E-mail" />
                                        </Box>
                                        <Box marginBottom={2}>
                                            <CustomInput1 required placeholder="Senha" />
                                        </Box>
                                        <Box marginBottom={2}>
                                            <CustomInput1 required placeholder="Confirme sua senha" />
                                        </Box>
                                        <Box marginBottom={2}>
                                            <CustomInput1 required placeholder="Creci" />
                                        </Box>
                                        <Box marginBottom={1}>
                                            <CustomInput1 required placeholder="Telefone celular" />
                                        </Box>
                                        <FormControlLabel control={<Checkbox required />} label={<Typography>Declaro que li e aceito os <a target="_Blank" href="">TERMOS E CONDIÇÕES</a></Typography>} />
                                        <Button type="submit" variant="contained" fullWidth color="primary" style={{backgroundColor: '#01AEE1'}}>Cadastrar</Button>
                                        <Box marginTop={2}>
                                            <Typography align="center" className={classes.cadastroTxt} onClick={handleChangeCadastro} >Fazer login</Typography>
                                        </Box>
                                    </form>
                                </Grid>
                            }
                        </Grid>
                    </Box>
                </Paper>

            </Box>
        </Box>
    );

}

export default Login;