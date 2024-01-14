import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imgLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10% 0",
  },
  img: {
    width: "70%",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  genreImages: {
    filter: theme.palette.mode !== "dark" ? "dark" : "invert(1)",
  },
}));
