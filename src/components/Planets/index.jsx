import React from 'react';
import styled from 'styled-components';

// Hooks
import useData from 'hooks/useData';

// Components
import Planet from './Planet';

// Styles
const H2 = styled.h2`
  font-size: 31px;
  margin: 10px 0;
  color: #ecbf3e;
`;

const StateStyle = styled.div`
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 31px;
  color: #ecbf3e;
`;

const Planets = () => {
  const [data, isLoading, isError] = useData('https://swapi.dev/api/planets/?pages=1');

  return (isLoading
    ? <StateStyle>Loading data...</StateStyle>
    : (
      <div>
        <H2>Planet</H2>
        {isError
          ? <StateStyle>Error fetching data</StateStyle>
          : (
            <div>
              {data && data.results ? data.results.map((planet) => <Planet key={planet.name} planet={planet} />) : null}
            </div>
          )}
      </div>
    )
  );
};

export default Planets;
