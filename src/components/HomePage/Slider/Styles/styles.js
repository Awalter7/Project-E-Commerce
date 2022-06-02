import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
    main: {
        backgroundColor: "white",
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: '3',
        alignItems: 'center',
    },
    shopAllButton: {
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        height: '65px',
        width: '200px',
        color: "#caa989",
        border: "2px solid #caa989",
        borderRadius: "50px",
        marginBottom: '10px',
        marginTop: '10px'
    },
}));