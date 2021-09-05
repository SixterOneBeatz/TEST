import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    } ,
    form: {
      width: "100%",
      marginTop: 20,
    }
  }),
);

export default useStyles;
