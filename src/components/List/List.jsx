import React, { createRef, useRef, useEffect, useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({
  isLoading,
  places,
  childClicked,
  type,
  setType,
  rating,
  setRating,
}) => {
  console.log({ childClicked });

  const theme = createTheme();

  const elRefs = useRef([]);

  return (
    <div style={{ padding: "25px" }}>
      <Typography variant="h4">Food & Dining around you</Typography>

      {isLoading ? (
        <div
          style={{
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <CircularProgress size="4rem" />
        </div>
      ) : (
        <>
          <FormControl
            sx={{
              margin: theme.spacing(1),
              minWidth: 120,
              marginBottom: "30px",
            }}
            variant="standard">
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              margin: theme.spacing(1),
              minWidth: 120,
              marginBottom: "30px",
            }}
            variant="standard">
            <InputLabel id="rating">All</InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid
            container
            spacing={3}
            sx={{
              height: "75vh",
              overflow: "auto",
            }}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails
                  selected={childClicked == i}
                  elRefs={elRefs}
                  index={i}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
