import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiService } from "../service/api.service";
import { Box, Container, Typography } from "@mui/material";
import { Videos } from "../";

const Search = () => {
  const [videos, setvideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetch(`search?part=snippet&q=${id}`);
        setvideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });

  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
          Search results for <span style={{ color: "#AA3731" }}>{id}</span>{" "}
          videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Search;
