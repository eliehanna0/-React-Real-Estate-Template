import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    display: "inline-block",
  },

  buttonProgress: {
    color: theme.palette.primary.main,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const SubmitButton = (props) => {
  const c = styles();
  const { loading } = props;

  return (
    <div className={c.wrapper}>
      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        size="large"
        onClick={() => props.onClickButton()}
        style={{ color: "white" }}
      >
        SUBMIT
      </Button>
      {loading && <CircularProgress size={24} className={c.buttonProgress} />}
    </div>
  );
};

export default SubmitButton;
