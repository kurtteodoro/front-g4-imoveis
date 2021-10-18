import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles( () => {
    return {
        divider: {
            width: 5,
            borderRadius: 100,
            minHeight: '100%',
            backgroundColor: '#DEDEDE',
            marginLeft: 20,
            marginRight: 20,
        }
    }
});

const Divider = function(props) {
    
    const classes = useStyles();

    return(
        <div className={classes.divider}>
            
        </div>
    );

}

export default Divider;