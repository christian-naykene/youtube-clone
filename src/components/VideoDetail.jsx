import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = React.useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      if (data.items) {
        setVideoDetail(data.items[0]);
      }
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
