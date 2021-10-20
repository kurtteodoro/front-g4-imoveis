import Nav from './Nav';
import Aside from './Aside';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper, createTheme, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from "@mui/material";
import { useState } from 'react';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#FD7623',
            contrastText: '#FFFFFF'
        },
        background: {
            paper: '#F8F9FA',
            default: '#F8F9FA'
        }
    },
    typography: {
        fontFamily: [
            'Nunito Sans',
        ].join(','),
    }
});

const useStyles = makeStyles( () => {

    const theme = useTheme();

    return {
        content: {
            minHeight: '100vh',
            paddingTop: 90,
            [theme.breakpoints.up('lg')]: {
                paddingLeft: 300
            },
        }
    }
});

const Theme = function(props) {

    const classes = useStyles();

    const [showAside, setShowAside] = useState(false);

    const changeAside = function() {
        setShowAside(!showAside);
    }

    return(
        <ThemeProvider theme={customTheme}>
            <Nav clickMenuAside={changeAside} />
            <Aside open={showAside} clickDark={changeAside} />
            <Paper id="content" className={classes.content} square>
                <Box padding={1}>
                    {props.children}
                </Box>
            </Paper>
        </ThemeProvider>
    );
}

export default Theme;