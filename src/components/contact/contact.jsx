import React from "react";
import Head from "../common/head";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ContactForm from "./contactForm";

const styles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  text: {
    marginTop: theme.spacing(2),
  },
}));

const Contact = () => {
  const c = styles();
  return (
    <React.Fragment>
      <Head title="Contact Us" />
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={c.paper}>
              <Grid container spacing={6}>
                <Grid item xs="12" lg="6">
                  <div className="img">
                    <img src="https://picsum.photos/id/101/1024/512" alt="" />
                  </div>
                  <Typography variant="h5" className={c.text}>
                    <b> Address</b>
                  </Typography>
                  <Typography variant="body1" className={c.text}>
                    <span> Lorem ipsum dolor sit amet </span> <br />
                    <span> consectetur adipisicing elit </span> <br />
                    <span> Accusantium alias animi magni </span> <br />
                    <span> maiores quas recusandae </span> <br />
                  </Typography>
                </Grid>
                <Grid item xs="12" lg="6">
                  <Typography variant="h5" color="primary">
                    <b>Send us a message</b>
                  </Typography>
                  <p>
                    <br />
                  </p>
                  <ContactForm />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Contact;
