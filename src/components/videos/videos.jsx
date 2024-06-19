import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard, Loader } from "../";

const Videos = ({ videos }) => {
  if (!videos.length) {
    return <Loader></Loader>;
  }
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {videos.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item}></VideoCard>}
          {item.id.channelId && <ChannelCard video={item}></ChannelCard>}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
