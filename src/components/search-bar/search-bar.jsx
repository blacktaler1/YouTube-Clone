import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { colors } from "../constans/colors";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
      sx={{
        display: "flex",
        alignItems: "center",
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "25px",
        mr: 5,
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          padding: "10px 0",
          fontSize: "16px",
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: colors.secondary }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
