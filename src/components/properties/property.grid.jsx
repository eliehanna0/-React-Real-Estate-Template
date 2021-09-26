import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Property from "./property";
import { getProperties } from "../../services/api";

const styles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    color: theme.palette.text.secondary,
    textAlign: "center",
    margin: theme.spacing(6),
  },
}));

const PropertyGrid = () => {
  let classes = styles();

  const [featuredData, setFData] = useState([]);

  useEffect(() => {
    console.log("component did mount");
    async function get() {
      let { data } = await getProperties();
      setFData(data.filter((d) => d.featured === 1));
    }
    get();
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h4" gutterBottom>
            Featured Properties
          </Typography>
          <Grid container item xs={12} spacing={3}>
            {featuredData.map((projectData, index) => (
              <Property key={index} data={projectData} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PropertyGrid;
