import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { colors } from "../constans/colors";
import moment from "moment";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            width: { xs: "100%", sm: "360px" },
            height: "180px",
          }}
        />
      </Link>
      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: "0.6" }}>
            {video?.snippet?.description.slice(0, 60)}
          </Typography>
        </Link>
        <Stack
          direction={"row"}
          position={"absolute"}
          bottom={"10px"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Avatar src={video?.snippet?.thumbnails?.high?.url} />
          <Typography sx={{ color: "gray" }} variant="subtitle2">
            {video?.snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
