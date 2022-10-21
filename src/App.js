import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Title headLine="Planetas" />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
