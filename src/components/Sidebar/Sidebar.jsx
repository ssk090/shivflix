import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyles from "./styles";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];
const demoCategories = [
  { label: "Action", value: "action" },
  { label: "Comedy", value: "comedy" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];

const redLogo =
  "https://fontmeme.com/permalink/220714/43acae63f2507a4a14a3e4efc965ef6c.png";
const blueLogo =
  "https://fontmeme.com/permalink/220714/e778e54a8563119bee31583d0854ed05.png";
const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
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
            <ListItem onClick={() => {}} button>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <ListSubheader>Genres</ListSubheader>
      {demoCategories.map(({ label, value }) => (
        <Link key={value} className={classes.links} to="/">
          <ListItem onClick={() => {}} button>
            <ListItemText primary={label} />
          </ListItem>
        </Link>
      ))}
    </>
  );
};

export default Sidebar;
