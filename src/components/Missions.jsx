import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headLine="Missões" />
        {missions.map((mission) => {
          const { name, year, country, destination } = mission;
          return (<MissionCard
            key={ `${name}-${year}` }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />);
        })}
      </div>
    );
  }
}

export default Missions;
