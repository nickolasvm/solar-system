import React from 'react';
import PropTypes from 'prop-types';

function handlePlanetName(name) {
  return name.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}
class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <img
          className={ `planet-img ${handlePlanetName(planetName)}` }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p className="planet-name" data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
