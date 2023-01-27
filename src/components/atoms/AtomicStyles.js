// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(()=> ({
    customButton: {
        backgroundColor: "red"
    },
    card: {
        maxWidth: "20rem"
    },
    cardMedia: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "56.25%" // 16:9 (golden ratio)
    },
    cardContent: {
        flexGrow: 1
    },
    cardActions: {
        justifyContent: "space-evenly"
    },
    footer: {
        margin: "2rem 0 0 0",
        padding: "4rem 2rem",
        backgroundColor: "#EBECE0"
    }
}))

export default useStyles;