import React, { Component } from 'react';

// Header component
import Header from '../components/header.component';
import CardSimple from '../components/card.component';

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <CardSimple />
      </React.Fragment>
    );
  }
}

export default Routes;
