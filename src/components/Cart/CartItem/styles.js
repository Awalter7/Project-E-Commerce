import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
        height: '100px',
        width: '100px',
        borderRadius: '50px'
    },
    card: {
        backgroundColor: 'inherit',
        color: 'white',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        minWidth: '400px',
        minHeight: '150px',
        maxWidth: '400px',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '100px',
        justifyContent: 'space-between',
    },
    cardActions: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '100px',
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        width: '50px',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

}));