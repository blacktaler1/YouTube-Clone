import { useState, useEffect } from "react";
import { Stack, Box, Container, Typography } from "@mui/material";
import { colors } from "../constans/colors";
import { Category, Videos } from "../";
import { ApiService } from "../service/api.service";

const Main = () => {
  const [SelectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const SelectedCategoryHandler = (category) => setSelectedCategory(category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetch(
          `search?part=snippet&q=${SelectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [SelectedCategory]);

  return (
    <Stack spacing={4} bgcolor={colors.background}>
      <Category
        SelectedCategoryHandler={SelectedCategoryHandler}
        SelectedCategory={SelectedCategory}
      />
      <Box p={4} sx={{ height: "auto", minHeight: "90vh" }}>
        <Container maxWidth="xl">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            {SelectedCategory} <span style={{ color: "#AA3731" }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
