import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../service/api.service";
import ReactPlayer from "react-player";
import { Videos } from "../";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Loader } from "../loader/loader";

const VideoDescription = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  const [relatedVideo, setrelatedVideo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetch(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);
        const reletedData = await ApiService.fetch(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setrelatedVideo(reletedData.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  if (!videoDetail) {
    return <Loader />;
  }

  const {
    snippet: { title, channelId, channelTitle, description, tags, thumbnails },
    statistics: { viewCount, likeCount, commentCount },
  } = videoDetail;

  return (
    <Box minHeight="90vh" mb={10} sx={{ padding: 2 }}>
      <Box display="flex" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box width={{ xs: "100%", md: "75%" }} pr={2}>
          <ReactPlayer
            playing={true}
            className="react-player"
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width="100%"
            height="60vh"
          />
          <Stack direction="row" flexWrap="wrap" spacing={1} mt={2}>
            {tags &&
              tags.map((item, idx) => (
                <Chip
                  label={item}
                  key={idx}
                  sx={{ cursor: "pointer" }}
                  deleteIcon={<Tag />}
                  onDelete={() => {}}
                  variant="outlined"
                />
              ))}
          </Stack>
          <Typography variant="h5" fontWeight="bold" mt={2}>
            {title}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.7, mt: 1 }}>
            {description}
          </Typography>
          <Stack direction="row" gap={4} alignItems="center" mt={2}>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ opacity: 0.7 }}
            >
              <Visibility />
              <Typography variant="body2">
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ opacity: 0.7 }}
            >
              <FavoriteOutlined />
              <Typography variant="body2">
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ opacity: 0.7 }}
            >
              <MarkChatRead />
              <Typography variant="body2">
                {parseInt(commentCount).toLocaleString()} comments
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" mt={2} gap={2}>
            <Link to={`/channel/${channelId}`}>
              <Avatar alt={channelTitle} src={thumbnails.default.url} />
              <Typography variant="subtitle2" color="textSecondary">
                {channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: 0.5 }}
                />
              </Typography>
            </Link>
          </Stack>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          sx={{
            overflowY: "auto",
            maxHeight: { xs: "none", md: "calc(90vh - 64px)" },
            mt: { xs: 2, md: 0 },
            px: 2,
            borderLeft: { md: "1px solid #ddd" },
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Related Videos
          </Typography>
          {relatedVideo.map((video) => (
            <Box key={video.id.videoId} mb={2}>
              <Link
                to={`/video/${video.id.videoId}`}
                style={{ textDecoration: "none" }}
              >
                <Videos videos={[video]} />
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDescription;
