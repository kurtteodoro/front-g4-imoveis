import { makeStyles } from '@material-ui/styles';
import { Button, Box, Paper, Typography, Hidden } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { useTheme } from "@mui/material";

const useStyles = makeStyles( () => {

    const theme = useTheme();

    return {
        aside: {
            height: '100%',
            width: 300,
            position: 'fixed',
            top: 0,
            left: 0,
            borderWidth: 0,
            paddingTop: 90,
            [theme.breakpoints.down('lg')]: {
                left: '-100%',
                display: 'inline'
            },
            transition: '0.3s ease all',
        },
        asideOpen: {
            height: '100%',
            width: 300,
            position: 'fixed',
            top: 0,
            left: 0,
            borderWidth: 0,
            paddingTop: 90,
            "&:before": {
                content: '',
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: 0,
                left: 0,
                backgroundColor: 'red',
                zIndex:1000
            },
            transition: '0.3s ease all',
        },
        iconContainer: {
            width: 45,
            height: 45
        },
        Ul: {
            listStyle: 'none',
            padding: 0,
            paddingLeft: 20,
        },
        btnIcon: {
            width: 45,
            height: 45,
            minWidth: 45,
            maxWidth: 45,
        },
        itemContainer: {
            borderRadius: 10,
            padding: 10
        },
        itemContainerActive: {
            backgroundColor: 'white',
            boxShadow: '0px 0px 15px 5px #eee',
            borderRadius: 10,
            padding: 10
        },
        Li: {
            cursor: 'pointer'
        },
        dark: {
            content: 'a',
            width: 'calc(100vw - 300px)',
            height: '100vh',
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.4)',
            left: '300px',
            top: '0px',
            [theme.breakpoints.up('lg')]: {
                display: 'none'
            },
        }
    }
});

const Aside = function (props) {

    const classes = useStyles();

    const Item = function(props) {
        return (
            <li className={classes.Li}>
                <Box display="flex" alignItems="center" className={props.active ? classes.itemContainerActive : classes.itemContainer}>
                    <Paper elevation={5} className={classes.iconContainer}>
                        <Button className={classes.btnIcon} color="primary" variant={props.active ? 'contained' : ''}>
                            {props.children}
                        </Button>
                    </Paper>
                    <Box marginLeft={3}>
                        <Typography>{props.label}</Typography>
                    </Box>
                </Box>
            </li>
        );
    }

    return (
        <Paper className={[props.open ? classes.asideOpen : classes.aside, props.open ? 'aside-open' : '']} square elevation={0}>
            <div className={classes.dark} onClick={props.clickDark} ></div>
            <ul className={classes.Ul}>
                
                <Item label="Buscar imóveis">
                    <SearchIcon />
                </Item>
                
                <Item label="Buscar imóveis" active={true}>
                    <SearchIcon />
                </Item>
                
                <Item label="Buscar imóveis">
                    <SearchIcon />
                </Item>
                <Item label="Buscar imóveis">
                    <SearchIcon />
                </Item>
                <Item label="Buscar imóveis">
                    <SearchIcon />
                </Item>
                <Item label="Buscar imóveis">
                    <SearchIcon />
                </Item>
                
            </ul>
        </Paper>
    );
}

export default Aside;