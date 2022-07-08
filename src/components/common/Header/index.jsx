
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styles
const Wrapper = styled.header`
  padding: 15px;
  background-color: #1b1b1b;
  display: flex;
  justify-content: flex-end;
`;

const LinkNav = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #e9bc3b;
  border-bottom: 1px solid #e9bc3b;
  padding: 7px 10px;
  border-radius: 7px;
`;

const Header = ({ children }) => (
  <>
    <Wrapper>
      <LinkNav to="/planets">Planets</LinkNav>
    </Wrapper>
    {children}
  </>
);

export default Header;
