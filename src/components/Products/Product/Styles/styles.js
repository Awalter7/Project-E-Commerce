import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        'max-width': '100%',
    },
    media:{
        backgroundSize: '250px 200px',
        minHeight: '200px',
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
    },
    cardContent: {
        display: 'flex',
        color: 'white',
        flexDirection: "column",
        textAlign: 'center',
    },
    addToCard: {
        backgroundColor: '#c19c64',
    },
}));