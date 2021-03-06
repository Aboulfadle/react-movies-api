import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClipLoader from "react-spinners/ClipLoader";
import pink from "@material-ui/core/colors/pink";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }
}));

const Loader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ClipLoader color={pink[600]} size={60} />
        </div>
    );
};

export default Loader;
