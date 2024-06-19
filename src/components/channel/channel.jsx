import { useEffect, useState } from "react";
import { Button, Box, Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { ApiService, ChannelCard, Videos } from "../";

const Channel = () => {
  const [channelDetail, setchannelDetail] = useState();
  const [videos, setvideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetch(
          `channels?part=snippet&id=${id}`
        );
        console.log(dataChannelDetail);
        setchannelDetail(dataChannelDetail.items[0]);
        const dataVideo = await ApiService.fetch(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        console.log(dataVideo);
        setvideos(dataVideo.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard video={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"}>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Channel;
