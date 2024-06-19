import React from "react";
import { Stack, Box } from "@mui/material";
import img from "../constans/Screenshot 2024-06-09 162124.png";
import { Link } from "react-router-dom";
import { SearchBar } from "../";

const Navbar = () => {
  return (
    <Stack
      height="80px"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      px={3}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "white",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={img} alt="Hero" height={70} width={100} />
      </Link>
      <Box flex={1} mx={3}>
        <SearchBar />
      </Box>
    </Stack>
  );
};

export default Navbar;
