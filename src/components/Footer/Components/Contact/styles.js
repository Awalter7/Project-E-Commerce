import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
    container: {
        margin: '0 auto',
        marginTop: '100px',
        marginBottom: '50px',
        padding: '10px 30px',
        maxWidth: '1200px',
        backgroundColor: 'rgb(31, 33, 38)',
        borderRadius: '20px',
    },
    wrapper: {
        padding: '20px',
        maxWidth: '1200px',
    },
    row:{
        paddingBottom: '25px',
    },
    rowGrow: {
        marginLeft: '10px',
        marginRight: '10px',
    }
}));