import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Slider,
  Typography,
  Button,
} from "@material-ui/core";

/*
/////////
 */

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
  },
  formControl: {
    marginBottom: theme.spacing(10),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    height: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function createPoints(start = 100, end = 1000, inc = 250) {
  let p = [];

  for (let i = start; i <= end; i += inc) {
    p.push({
      value: i,
      label: i,
    });
  }

  return p;
}

function getRoomsList() {
  return [1, 2, 3, 4, 5];
}

function getTypes() {
  return [
    {
      id: 0,
      name: "Any",
    },
    {
      id: 1,
      name: "Apartment",
    },
    {
      id: 2,
      name: "Duplex",
    },
    {
      id: 3,
      name: "House",
    },
  ];
}

const Filters = (props) => {
  const classes = useStyles();

  const def_filters = {
    rooms: 0,
    types: 0,
    price: 0,
    size: [0, 1000],
  };
  const [filters, setFilters] = React.useState(def_filters);
  const [points, setPoints] = useState(false);

  useEffect(() => {
    console.log("component did mount");
    setPoints(createPoints());
  }, []);

  const handleChange = (event, value) => {
    let new_filters = { ...filters, [event.target.name]: event.target.value };
    setFilters(new_filters);
    updateFilters(new_filters);
  };

  const handleSliderChange = (name, value) => {
    let new_filters = { ...filters, [name]: value };
    setFilters(new_filters);
    updateFilters(new_filters);
  };

  const reset = () => {
    setFilters(def_filters);
    updateFilters(def_filters);
  };

  const updateFilters = (filters) => {
    props.onUpdate(filters);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Filters
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Rooms</InputLabel>
        <Select value={filters.rooms} name="rooms" onChange={handleChange}>
          <MenuItem value={0}>Any</MenuItem>
          {getRoomsList().map((room) => (
            <MenuItem key={room} value={room}>
              {room}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Property Type</InputLabel>
        <Select value={filters.types} name="types" onChange={handleChange}>
          {getTypes().map((type) => (
            <MenuItem key={type.id} value={type.id}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <Typography id="non-linear-slider" gutterBottom>
          Max Price in USD
        </Typography>
        <Slider
          defaultValue={0}
          value={filters.price}
          step={100}
          onChange={(event, value) => handleSliderChange("price", value)}
          valueLabelDisplay="auto"
          max={1000}
          marks={points}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Typography id="range-slider" gutterBottom>
          Area Range (sqm)
        </Typography>
        <Slider
          value={filters.size}
          step={50}
          max={1000}
          marks={points}
          onChange={(event, value) => handleSliderChange("size", value)}
          valueLabelDisplay="auto"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={reset}
        >
          Reset
        </Button>
      </FormControl>
    </div>
  );
};

export default Filters;
