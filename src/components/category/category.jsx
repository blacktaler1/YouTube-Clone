import { Stack } from "@mui/material";
import React from "react";
import { colors } from "../constans/colors";

import { category } from "../constans/constans";

const Category = ({ SelectedCategoryHandler, SelectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          onClick={() => SelectedCategoryHandler(item.name)}
          style={{
            borderRadius: "0",
            background: item.name == SelectedCategory && colors.secondary,
            color: item.name == SelectedCategory && "#fff",
          }}
        >
          <span
            style={{
              color: colors.secondary,
              marginRight: "15px",
              color: item.name == SelectedCategory && "#fff",
            }}
          >
            {item.icons}
          </span>
          <span style={{ opacity: 1 }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
