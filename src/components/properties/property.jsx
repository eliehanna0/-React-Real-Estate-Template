import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import PropertyIcons from "./property.icons";
import * as s from "./property.module.css";

const styles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  },
  img: {},
  grid: {
    padding: theme.spacing(1.5),
  },
}));

const Property = ({ size = 3, data = [] }) => {
  let classes = styles();

  return (
    <Grid className={s.project + " relative"} item xs={12} sm={6} lg={size}>
      <Link className={s.link} to={`/property/${data.id}`}></Link>
      <Paper className={classes.paper}>
        <div
          className={s.img + " bg"}
          style={{ backgroundImage: `url("${data.image}")` }}
        ></div>

        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              {data.name} {data.type} - {data.size} sqm
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary">
              <b>{data.price}K USD</b>
            </Typography>
          </Grid>
          <Grid align="right" item xs={12}>
            <PropertyIcons
              bathrooms={data.bathrooms}
              bedrooms={data.bedrooms}
              parking={data.parking}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Property;
