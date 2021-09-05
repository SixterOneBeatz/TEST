import {
  createStyles,
  makeStyles,
  TableCell,
  withStyles,
} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 500,
    },
    margin: {
      margin: 2,
      padding: 1
    },
    colorFooter: {
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.common.black,
    },
  })
);

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  })
)(TableCell);
