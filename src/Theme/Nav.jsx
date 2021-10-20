import { Box, Paper, Button, Hidden, Fab, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import CustomInput1 from "../Components/CustomInput1";
import SearchIcon from '@material-ui/icons/Search';
import { useTheme } from "@mui/material";
// import MenuIcon from '@material-ui/icons/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const useStyles = makeStyles( () => {

    const theme = useTheme();

    return {
        nav: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1,
            borderWidth: 0
        },
        input: {
            borderRadius: 200
        },
        logomarca: {
            width: 150
        },
        perfil: {
            width: 70,
            height: 70,
            borderRadius:1000,
            cursor: "pointer"
        },
        inputWidth: {
            width: 700
        },
        buttonSearch: {
            borderRadius:0,
            boxShadow: 'none'
        },
        buttons: {
            display: 'flex',
            [theme.breakpoints.up('lg')]: {
                display: 'none'
            },
        }
    }
});

const Nav = function(props) {
    
    const classes = useStyles();
    
    const buttonSearch = function() {
        return (
            <Button color="primary" variant="contained" className={classes.buttonSearch}>
                <SearchIcon />
            </Button>
        );
    }

    return(
        <Paper className={classes.nav} square elevation={0}>
            <Box display="flex" alignItems="center" justifyContent="space-between" paddingX={2}>

                <Hidden mdDown>
                    <Box>
                        <img src="/images/logo.png" alt="Logomarca" className={classes.logomarca} />
                    </Box>
                </Hidden>

                <Box mr={1}  className={classes.buttons}>
                    <IconButton color="transparent" onClick={props.clickMenuAside} >
                        <MenuIcon />
                    </IconButton>
                    <IconButton color="transparent" >
                        <FilterAltIcon />
                    </IconButton>
                </Box>

                <Box className={classes.inputWidth}>
                    <CustomInput1 placeholder="Pesquise por bairro ou cidade" endComponent={buttonSearch} />
                </Box>
                
                <Hidden mdDown>
                    <Box>
                        <img src="/images/perfil.jpg" alt="Foto de perfil" className={classes.perfil} />
                    </Box>
                </Hidden>

            </Box>
        </Paper>
    );
}

export default Nav;