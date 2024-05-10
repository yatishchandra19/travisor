import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData, getWeatherData } from "./api/index";

import { CssBaseline, Grid } from "@mui/material";

const App = () => {
  const [places, setPlaces] = useState([
    // {
    //   address:
    //     "Hyderabad Marriott Hotel, 1-3-1024, Tank Bund Opp Hussain Sagar Lake, Hyderabad 500080 India",
    //   address_obj: {
    //     street1: "Hyderabad Marriott Hotel, 1-3-1024, Tank Bund",
    //     street2: "Opp Hussain Sagar Lake",
    //     city: "Hyderabad",
    //     state: "Telangana",
    //     country: "India",
    //   },
    //   ancestors: [
    //     { name: "Hyderabad", location_id: "297586" },
    //     { name: "Hyderabad District", location_id: "12389092" },
    //     { name: "Telangana", location_id: "7058854" },
    //     { name: "India", location_id: "293860" },
    //   ],
    //   awards: [],
    //   bearing: "northwest",
    //   category: { key: "restaurant", name: "Restaurant" },
    //   cuisine: [
    //     { key: "10346", name: "Indian" },
    //     { key: "10679", name: "Healthy" },
    //     { key: "10665", name: "Vegetarian Friendly" },
    //     { key: "10697", name: "Vegan Options" },
    //     { key: "10751", name: "Halal" },
    //     { key: "10992", name: "Gluten Free Options" },
    //   ],
    //   description:
    //     "Bidri, our award winning Indian speciality restaurant opens its doors for diners all days of the week ! Indulge in evenings of culture, cuisine and conversations with curated dishes and live instrumental music which transports you to the splendor of Riyasati Rasoi’s of Hyderabad, United Punjab, Telangana in an authentic fashion - inspired by Persian and Afghani cooking. Bidri retains the class and brilliance of the Nizami kitchens with secret recipes inherited from one generation to another, taking the unforgettable dining experience a notch higher. Chef Kamran Khan takes charge and the journey continues as Bidri adds a few more jewels to its crown and brings you a line-up of splendid dishes all through the week Monday to Sunday.",
    //   dietary_restrictions: [],
    //   distance: "3.5035421146144827",
    //   distance_string: "3.5 km",
    //   doubleclick_zone: "as.india.andhra_pradesh.hyderabad",
    //   email: "akanksha.chatterjee@marriotthotels.com",
    //   establishment_types: [{}],
    //   hours: { week_ranges: [], timezone: "Asia/Kolkata" },
    //   is_candidate_for_contact_info_suppression: false,
    //   is_closed: false,
    //   is_jfy_enabled: false,
    //   is_long_closed: false,
    //   latitude: "17.424171",
    //   location_id: "946888",
    //   location_string: "Hyderabad, Hyderabad District, Telangana",
    //   longitude: "78.48692",
    //   name: "Bidri",
    //   nearest_metro_station: [],
    //   num_reviews: "602",
    //   open_now_text: "Closed Now",
    //   parent_display_name: "Hyderabad",
    //   phone: "+91 40 6652 2577",
    //   photo: {
    //     caption: "Bidri Ambience",
    //     helpful_votes: "8",
    //     id: "489706674",
    //     images: {
    //       large: {
    //         width: "1024",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-w/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "683",
    //       },
    //       medium: {
    //         width: "550",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-s/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "367",
    //       },
    //       original: {
    //         width: "1280",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "853",
    //       },
    //       small: {
    //         width: "150",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-l/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "150",
    //       },
    //       thumbnail: {
    //         width: "50",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-t/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "50",
    //       },
    //     },
    //     is_blessed: true,
    //     published_date: "2021-06-22T02:03:18-0400",
    //     uploaded_date: "2021-06-22T02:03:18-0400",
    //     user: { member_id: "0", type: "user", user_id: null },
    //   },
    //   preferred_map_engine: "default",
    //   price: "$1,400 - $1,800",
    //   price_level: "$$$$",
    //   ranking: "#1 of 4,803 Restaurants in Hyderabad",
    //   ranking_category: "restaurant",
    //   ranking_denominator: "3400",
    //   ranking_geo: "Hyderabad",
    //   ranking_geo_id: "297586",
    //   ranking_position: "1",
    //   rating: "5.0",
    //   raw_ranking: "4.879218101501465",
    //   ride_providers: ["olaCabs"],
    //   subcategory: [{}],
    //   timezone: "Asia/Kolkata",
    //   web_url:
    //     "https://www.tripadvisor.com/Restaurant_Review-g297586-d946888-Reviews-Bidri-Hyderabad_Hyderabad_District_Telangana.html",
    //   website:
    //     "http://www.marriott.com/hotels/hotel-information/restaurant/hydmc-hyderabad-marriott-hotel-and-convention-centre/",
    //   write_review:
    //     "https://www.tripadvisor.com/UserReview-g297586-d946888-Bidri-Hyderabad_Hyderabad_District_Telangana.html",
    // },
    // {
    //   address:
    //     "Hyderabad Marriott Hotel, 1-3-1024, Tank Bund Opp Hussain Sagar Lake, Hyderabad 500080 India",
    //   address_obj: {
    //     street1: "Hyderabad Marriott Hotel, 1-3-1024, Tank Bund",
    //     street2: "Opp Hussain Sagar Lake",
    //     city: "Hyderabad",
    //     state: "Telangana",
    //     country: "India",
    //   },
    //   ancestors: [
    //     { name: "Hyderabad", location_id: "297586" },
    //     { name: "Hyderabad District", location_id: "12389092" },
    //     { name: "Telangana", location_id: "7058854" },
    //     { name: "India", location_id: "293860" },
    //   ],
    //   awards: [],
    //   bearing: "northwest",
    //   category: { key: "restaurant", name: "Restaurant" },
    //   cuisine: [
    //     { key: "10346", name: "Indian" },
    //     { key: "10679", name: "Healthy" },
    //     { key: "10665", name: "Vegetarian Friendly" },
    //     { key: "10697", name: "Vegan Options" },
    //     { key: "10751", name: "Halal" },
    //     { key: "10992", name: "Gluten Free Options" },
    //   ],
    //   description:
    //     "Bidri, our award winning Indian speciality restaurant opens its doors for diners all days of the week ! Indulge in evenings of culture, cuisine and conversations with curated dishes and live instrumental music which transports you to the splendor of Riyasati Rasoi’s of Hyderabad, United Punjab, Telangana in an authentic fashion - inspired by Persian and Afghani cooking. Bidri retains the class and brilliance of the Nizami kitchens with secret recipes inherited from one generation to another, taking the unforgettable dining experience a notch higher. Chef Kamran Khan takes charge and the journey continues as Bidri adds a few more jewels to its crown and brings you a line-up of splendid dishes all through the week Monday to Sunday.",
    //   dietary_restrictions: [],
    //   distance: "3.5035421146144827",
    //   distance_string: "3.5 km",
    //   doubleclick_zone: "as.india.andhra_pradesh.hyderabad",
    //   email: "akanksha.chatterjee@marriotthotels.com",
    //   establishment_types: [{}],
    //   hours: { week_ranges: [], timezone: "Asia/Kolkata" },
    //   is_candidate_for_contact_info_suppression: false,
    //   is_closed: false,
    //   is_jfy_enabled: false,
    //   is_long_closed: false,
    //   latitude: "17.445214",
    //   location_id: "946888",
    //   location_string: "Hyderabad, Hyderabad District, Telangana",
    //   longitude: "78.48692",
    //   name: "Bidri",
    //   nearest_metro_station: [],
    //   num_reviews: "602",
    //   open_now_text: "Closed Now",
    //   parent_display_name: "Hyderabad",
    //   phone: "+91 40 6652 2577",
    //   photo: {
    //     caption: "Bidri Ambience",
    //     helpful_votes: "8",
    //     id: "489706674",
    //     images: {
    //       large: {
    //         width: "1024",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-w/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "683",
    //       },
    //       medium: {
    //         width: "550",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-s/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "367",
    //       },
    //       original: {
    //         width: "1280",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "853",
    //       },
    //       small: {
    //         width: "150",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-l/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "150",
    //       },
    //       thumbnail: {
    //         width: "50",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-t/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "50",
    //       },
    //     },
    //     is_blessed: true,
    //     published_date: "2021-06-22T02:03:18-0400",
    //     uploaded_date: "2021-06-22T02:03:18-0400",
    //     user: { member_id: "0", type: "user", user_id: null },
    //   },
    //   preferred_map_engine: "default",
    //   price: "$1,400 - $1,800",
    //   price_level: "$$$$",
    //   ranking: "#1 of 4,803 Restaurants in Hyderabad",
    //   ranking_category: "restaurant",
    //   ranking_denominator: "3400",
    //   ranking_geo: "Hyderabad",
    //   ranking_geo_id: "297586",
    //   ranking_position: "1",
    //   rating: "5.0",
    //   raw_ranking: "4.879218101501465",
    //   ride_providers: ["olaCabs"],
    //   subcategory: [{}],
    //   timezone: "Asia/Kolkata",
    //   web_url:
    //     "https://www.tripadvisor.com/Restaurant_Review-g297586-d946888-Reviews-Bidri-Hyderabad_Hyderabad_District_Telangana.html",
    //   website:
    //     "http://www.marriott.com/hotels/hotel-information/restaurant/hydmc-hyderabad-marriott-hotel-and-convention-centre/",
    //   write_review:
    //     "https://www.tripadvisor.com/UserReview-g297586-d946888-Bidri-Hyderabad_Hyderabad_District_Telangana.html",
    // },
    // {
    //   address:
    //     "Hyderabad Marriott Hotel, 1-3-1024, Tank Bund Opp Hussain Sagar Lake, Hyderabad 500080 India",
    //   address_obj: {
    //     street1: "Hyderabad Marriott Hotel, 1-3-1024, Tank Bund",
    //     street2: "Opp Hussain Sagar Lake",
    //     city: "Hyderabad",
    //     state: "Telangana",
    //     country: "India",
    //   },
    //   ancestors: [
    //     { name: "Hyderabad", location_id: "297586" },
    //     { name: "Hyderabad District", location_id: "12389092" },
    //     { name: "Telangana", location_id: "7058854" },
    //     { name: "India", location_id: "293860" },
    //   ],
    //   awards: [],
    //   bearing: "northwest",
    //   category: { key: "restaurant", name: "Restaurant" },
    //   cuisine: [
    //     { key: "10346", name: "Indian" },
    //     { key: "10679", name: "Healthy" },
    //     { key: "10665", name: "Vegetarian Friendly" },
    //     { key: "10697", name: "Vegan Options" },
    //     { key: "10751", name: "Halal" },
    //     { key: "10992", name: "Gluten Free Options" },
    //   ],
    //   description:
    //     "Bidri, our award winning Indian speciality restaurant opens its doors for diners all days of the week ! Indulge in evenings of culture, cuisine and conversations with curated dishes and live instrumental music which transports you to the splendor of Riyasati Rasoi’s of Hyderabad, United Punjab, Telangana in an authentic fashion - inspired by Persian and Afghani cooking. Bidri retains the class and brilliance of the Nizami kitchens with secret recipes inherited from one generation to another, taking the unforgettable dining experience a notch higher. Chef Kamran Khan takes charge and the journey continues as Bidri adds a few more jewels to its crown and brings you a line-up of splendid dishes all through the week Monday to Sunday.",
    //   dietary_restrictions: [],
    //   distance: "3.5035421146144827",
    //   distance_string: "3.5 km",
    //   doubleclick_zone: "as.india.andhra_pradesh.hyderabad",
    //   email: "akanksha.chatterjee@marriotthotels.com",
    //   establishment_types: [{}],
    //   hours: { week_ranges: [], timezone: "Asia/Kolkata" },
    //   is_candidate_for_contact_info_suppression: false,
    //   is_closed: false,
    //   is_jfy_enabled: false,
    //   is_long_closed: false,
    //   latitude: "17.424171",
    //   location_id: "946888",
    //   location_string: "Hyderabad, Hyderabad District, Telangana",
    //   longitude: "78.48692",
    //   name: "Bidri",
    //   nearest_metro_station: [],
    //   num_reviews: "602",
    //   open_now_text: "Closed Now",
    //   parent_display_name: "Hyderabad",
    //   phone: "+91 40 6652 2577",
    //   photo: {
    //     caption: "Bidri Ambience",
    //     helpful_votes: "8",
    //     id: "489706674",
    //     images: {
    //       large: {
    //         width: "1024",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-w/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "683",
    //       },
    //       medium: {
    //         width: "550",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-s/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "367",
    //       },
    //       original: {
    //         width: "1280",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "853",
    //       },
    //       small: {
    //         width: "150",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-l/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "150",
    //       },
    //       thumbnail: {
    //         width: "50",
    //         url: "https://media-cdn.tripadvisor.com/media/photo-t/1d/30/54/b2/bidri-ambience.jpg",
    //         height: "50",
    //       },
    //     },
    //     is_blessed: true,
    //     published_date: "2021-06-22T02:03:18-0400",
    //     uploaded_date: "2021-06-22T02:03:18-0400",
    //     user: { member_id: "0", type: "user", user_id: null },
    //   },
    //   preferred_map_engine: "default",
    //   price: "$1,400 - $1,800",
    //   price_level: "$$$$",
    //   ranking: "#1 of 4,803 Restaurants in Hyderabad",
    //   ranking_category: "restaurant",
    //   ranking_denominator: "3400",
    //   ranking_geo: "Hyderabad",
    //   ranking_geo_id: "297586",
    //   ranking_position: "1",
    //   rating: "5.0",
    //   raw_ranking: "4.879218101501465",
    //   ride_providers: ["olaCabs"],
    //   subcategory: [{}],
    //   timezone: "Asia/Kolkata",
    //   web_url:
    //     "https://www.tripadvisor.com/Restaurant_Review-g297586-d946888-Reviews-Bidri-Hyderabad_Hyderabad_District_Telangana.html",
    //   website:
    //     "http://www.marriott.com/hotels/hotel-information/restaurant/hydmc-hyderabad-marriott-hotel-and-convention-centre/",
    //   write_review:
    //     "https://www.tripadvisor.com/UserReview-g297586-d946888-Bidri-Hyderabad_Hyderabad_District_Telangana.html",
    // },
  ]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState({});
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  // console.log(filteredPlaces.length);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      // getWeatherData(coordinates.lat, coordinates.lng).then((data) => {
      //   console.log(data);
      //   setWeatherData(data);
      // });

      // getPlacesData(type, bounds.ne, bounds.sw).then((data) => {
      //   console.log(data);

      //   setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
      //   setFilteredPlaces([]);
      //   setIsLoading(false);
      // });
    }
  }, [type, bounds]);

  useEffect(() => {
    setFilteredPlaces(places.filter((place) => place.rating > rating));
  }, [rating]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setBounds={setBounds}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
