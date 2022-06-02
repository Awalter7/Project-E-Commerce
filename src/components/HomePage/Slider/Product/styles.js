import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
    cartButton: {
        backgroundColor: 'black',
        flexDirection: "row",
        alignItems: "center",
        color: "#feae66",
        border: "2px solid #feae66",
        borderRadius: "50px",
        marginBottom: '10px',
        marginTop: '10px'
    },
    root: {
        'max-width': '100%',
    },
    media:{
        minHeight: '250px',
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
