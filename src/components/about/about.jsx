import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Head from "../common/head";

/*


 */
const styles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.secondary,
  },
  text: {
    marginTop: theme.spacing(2),
  },
}));

const About = (props) => {
  const c = styles();
  const [data, setData] = useState(false);

  useEffect(() => {
    console.log("component did mount");
    setData(false);
    async function get() {
      let data = {
        text: "sample text",
        image: "",
      };
      setData(data);
    }
    setTimeout(() => {
      //simulate server delay
      get();
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <Head title="About Us" />
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Paper className={c.paper}>
              <div style={{ textAlign: "center" }}>
                {!data && (
                  <CircularProgress style={{ margin: "3rem" }} size={44} />
                )}
              </div>

              <div className="img">
                <img src={data.image} alt="" />
              </div>
              <Typography className={c.text} variant="body1">
                {data.text}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default About;
