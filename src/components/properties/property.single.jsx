import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  TableCell,
  withStyles,
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Typography,
} from "@material-ui/core";
import { getProperties } from "../../services/api";
import Head from "../common/head";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    overflow: "hidden",
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, value) {
  return { name, value };
}

const PropertySingle = (props) => {
  const classes = styles();

  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);

  useEffect(() => {
    console.log("component did mount");
    async function get() {
      let { data } = await getProperties();
      const productData = data.filter(
        (d) => d.id === parseInt(props.match.params.id)
      );
      setData(productData[0]);

      let new_table = [];
      new_table.push(createData("Bedrooms", productData[0].bedrooms));
      new_table.push(createData("Bathrooms", productData[0].bathrooms));
      new_table.push(createData("Parking Spots", productData[0].parking));
      new_table.push(createData("Size", productData[0].size + " sqm"));
      new_table.push(createData("Price", productData[0].price + "K USD"));
      setTable(new_table);
    }
    get();
  }, []);

  return (
    <React.Fragment>
      <Head title={data.name} />
      <Container maxWidth="lg">
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} md={7}>
                <Paper className={classes.paper}>
                  <div className="img">
                    <img src={data.image} alt="" />
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={5}>
                <Grid
                  container
                  spacing={3}
                  className=""
                  style={{ padding: "14px", paddingTop: 0 }}
                >
                  <Grid item xs={12}>
                    <TableContainer component={Paper}>
                      <Table
                        className={classes.table}
                        aria-label="customized table"
                      >
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Features</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {table.map((row) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {row.name}
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                {row.value}
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                      {data.name} {data.type} - {data.size} sqm
                    </Typography>
                    <b>Description</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusantium ad commodi corporis culpa delectus, doloremque
                      excepturi incidunt magni nihil odio quisquam sunt unde
                      voluptate voluptatem voluptates! Ducimus illum maiores
                      veritatis!
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PropertySingle;
