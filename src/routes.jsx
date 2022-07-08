import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Components
import Header from 'components/common/Header';
import Home from 'components/Home';
import Planets from 'components/Planets';

const Routess = () => (
  <Router>
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </Header>
  </Router>
);

export default Routess;
