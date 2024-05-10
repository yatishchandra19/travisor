import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@react-google-maps/api";

const Header = ({ setCoordinates }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat: lat, lng: lng });
  };
  return (
    <div style={styles.header}>
      <p style={styles.title}>Travel Advisor</p>
      <div style={styles.exploreContainer}>
        <p style={styles.exploreText}>Explore new places</p>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div style={styles.search}>
            <div style={styles.searchIcon}>
              <SearchIcon fontSize="medium" sx={{ color: "black" }} />
            </div>
            <input style={styles.searchInput} placeholder="Search…" />
          </div>
        </Autocomplete>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    backgroundColor: "#00308F",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    height: "12vh",
    color: "white",
  },
  title: {
    margin: 0,
    fontWeight: "bold",
  },
  exploreContainer: {
    display: "flex",
    alignItems: "center",
  },
  exploreText: {
    margin: 0,
    marginRight: "20px",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "4px",
    paddingLeft: "4px",
  },
  searchIcon: { display: "flex", alignItems: "center" },
  searchInput: {
    padding: "8px",
    borderRadius: "4px",
    // border: "1px solid #ccc",
    border: "none", // Remove the border
    outline: "none",
  },
};

export default Header;
