import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const CustomInput1 = function(props) {
    
    const useStyles = makeStyles( () => {
        return {
            container: {
                boxShadow: props.shadow == false ? '' : '0px 0px 15px 5px #eee',
                borderRadius: 4,
                overflow: 'hidden'
            },
            input: {
                height: 50,
                width: '100%',
                paddingLeft: 25,
                paddingRight: 25,
                borderWidth: 0,
                outline: 'none'
            }
        }
    });

    const classes = useStyles();
    const EndComponent = props.endComponent;
    const StartComponent = props.startComponent;

    return (
        <Box className={classes.container} display="flex">
            { StartComponent && <StartComponent /> }
            <input className={classes.input} required={props.required} placeholder={props.placeholder} />
            { EndComponent && <EndComponent /> }
        </Box>
    );
}

export default CustomInput1;