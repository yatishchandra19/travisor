import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import mapStyles from "../../mapStyles";

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
  weatherData,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div style={{ height: "88vh", width: "100%", backgroundColor: "red" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          console.log(e.bounds);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({
            ne: e.bounds.ne,
            nw: e.bounds.nw,
            se: e.bounds.se,
            sw: e.bounds.sw,
          });
        }}
        onChildClick={(child) => setChildClicked(child)}>
        {places?.map((place, i) => (
          <div
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              "&:hover": { zIndex: 2 },
            }}
            lat={Number(place?.latitude)}
            lng={Number(place?.longitude)}
            key={i}>
            {!isDesktop ? (
              <LocationOnIcon color="primary" fontSize="medium" />
            ) : (
              <Paper
                elevation={3}
                sx={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100px",
                }}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  sx={{ cursor: "pointer" }}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            )}
          </div>
        ))}
        {weatherData.weather && weatherData.weather.length > 0 && (
          <div lat={weatherData?.coord?.lat} lng={weatherData?.coord?.lng}>
            <img
              height={100}
              src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            />
          </div>
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
