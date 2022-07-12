import React from 'react'
import background from "./spoons.jpg";
import {Box, Typography} from '@mui/material';

const bgStyle = {
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: "white"
}

function Home () {
  return (
    <div className = "bg"
    style={bgStyle}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography marginTop="40px" variant="h2">Welcome!</Typography>
      </Box>
    </div>
  );
}

export default Home;