import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '5%',
        color: 'white',
    },
    subtotal: {
        fontFamily: 'font2',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white',
    },
    container: {
        paddingLeft: '15%',
        paddingRight: '15%',
        height: '100%',
        backgroundColor: 'black',
        alignContent: 'center',
        justifyContent: 'center',
        width: 'auto',
    },
    emptyButton: {
        minWidth: '150px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '0px',
        marginRight: '20px',
    },
    checkoutButton: {
        minWidth: '150px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '0px',
    },
    link: {
        textDecoration: 'none',
    },
    cartDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        justifyItems: 'space-between',
        marginTop: '10%',
        justifyContent: 'center',
    },
    itemGrid: {

        margin: '0px',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between'
    }

}));