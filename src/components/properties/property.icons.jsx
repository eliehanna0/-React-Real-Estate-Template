import React from "react";
import { Bathtub, Hotel, DirectionsCar as Parking } from "@material-ui/icons";
import { Badge, withStyles } from "@material-ui/core";

const StyledBadge = withStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1.5),
    marginLeft: theme.spacing(2.5),
  },

  badge: {
    right: -6,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const PropertyIcons = ({ bathrooms, bedrooms, parking }) => {
  return (
    <React.Fragment>
      {bathrooms !== 0 && (
        <StyledBadge badgeContent={bathrooms} color="primary">
          <Bathtub />
        </StyledBadge>
      )}

      {bedrooms !== 0 && (
        <StyledBadge badgeContent={bedrooms} color="primary">
          <Hotel />
        </StyledBadge>
      )}

      {parking !== 0 && (
        <StyledBadge badgeContent={parking} color="primary">
          <Parking />
        </StyledBadge>
      )}
    </React.Fragment>
  );
};

export default PropertyIcons;
