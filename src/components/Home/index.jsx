import React from 'react';
import styled from 'styled-components';

//Images
import BackgroundImg from 'images/background.jpg';

// Styles
const Wrap = styled.div`
  height: 685px;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Home = () => <Wrap />;

export default Home;
