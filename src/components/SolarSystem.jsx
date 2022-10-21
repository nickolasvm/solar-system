import React from 'react';
import Title from './Title';
import planetsData from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />

        {planetsData.map((planet) => {
          const { name, image } = planet;

          return (<PlanetCard
            key={ planet.name }
            planetName={ name }
            planetImage={ image }
          />);
        })}
      </div>
    );
  }
}

export default SolarSystem;
