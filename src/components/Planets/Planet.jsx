import React from 'react';

// Styles
import { Card, H3, Paragraph } from 'components/styled';

const Planet = ({
  planet: {
    name,
    population,
    terrain,
  },
}) => {
  return (
    <Card>
      <H3>{name}</H3>
      <Paragraph>Population - {population}</Paragraph>
      <Paragraph>Terrain - {terrain}</Paragraph>
    </Card>
  );
};

export default Planet;
