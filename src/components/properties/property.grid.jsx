import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Property from "./property";
import Filters from "./filters";
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
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log("component did mount");
    async function get() {
      let { data } = await getProperties();
      setFData(data.filter((d) => d.featured === 1));
      setData(data);
      setFilteredData(data);
    }
    get();
  }, []);

  const updateFilters = (filters) => {
    let new_data = data.filter((d) => {
      for (let key in data) {
        if (
          (filters.types === 0 || d.type === filters.types) &&
          (filters.rooms === 0 || d.bedrooms === filters.rooms) &&
          (filters.price === 0 || d.price <= filters.price) &&
          (filters.size[0] === 0 || d.size >= filters.size[0]) &&
          (filters.size[1] === 1000 || d.size <= filters.size[1])
        )
          return true;
      }
      return false;
    });

    setFilteredData(new_data);
  };

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
          <Typography className={classes.title} variant="h4" gutterBottom>
            <br />
            Properties
          </Typography>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} md={3}>
              <Paper className={classes.paper}>
                <Filters onUpdate={updateFilters} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container item xs={12} spacing={3}>
                {!filteredData.length > 0 && (
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", flexGrow: 1, marginTop: 100 }}
                  >
                    No Properties Found
                  </Typography>
                )}

                {filteredData.map((projectData, index) => (
                  <Property key={index} data={projectData} size={4} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PropertyGrid;
