import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Box,
  CircularProgress,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyles from "./styles";
import { useGetGenresQuery } from "../../services/TMDB.js";
import genreIcons from "../../assets/genres";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const redLogo =
  "https://fontmeme.com/permalink/220714/43acae63f2507a4a14a3e4efc965ef6c.png";
const blueLogo =
  "https://fontmeme.com/permalink/220714/e778e54a8563119bee31583d0854ed05.png";
const Sidebar = ({ setMobileOpen }) => {
  const { data, isFetching } = useGetGenresQuery();
  console.log(data);
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "dark" ? redLogo : blueLogo}
          alt="Shivflix Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(value))}
              button
            >
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <ListSubheader>Genres</ListSubheader>
      {isFetching ? (
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress />
        </Box>
      ) : (
        data.genres.map(({ name, id }) => (
          <Link key={name} className={classes.links} to="/">
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(id))}
              button
            >
              <ListItemIcon>
                <img
                  src={genreIcons[name.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))
      )}
    </>
  );
};

export default Sidebar;
