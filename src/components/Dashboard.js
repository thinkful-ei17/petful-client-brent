import React from 'react';
import { connect } from 'react-redux';
import { fetchAnimal } from './../actions';
import Pet from './Pet';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAnimal('dog'));
    this.props.dispatch(fetchAnimal('cat'));
  }

  render(){
    return(
      <div>
        <Pet breed="dog"/>
        <Pet breed="cat"/>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// });

export default connect()(Dashboard);
