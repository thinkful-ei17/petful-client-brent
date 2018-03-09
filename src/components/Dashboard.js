import React from 'react';
import { connect } from 'react-redux';

import Pet from './Pet';

export class Dashboard extends React.Component {
  render(){
    return(
      <div>
        <Pet breed="dog"/>
        <Pet breed="cat"/>
      </div>
    );
  }
}

export default connect()(Dashboard);
