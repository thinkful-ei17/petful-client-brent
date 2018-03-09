import React from 'react';
import { connect } from 'react-redux';
// header -> name/photo
// main-> dl to display animal info minus name & photo
// button for adopt(dispatch action to delete)
function adoptAnimal(){

}

function pet(props) {

  return(
    <div>
      <h1>
        { props.animal.name }
      </h1>
      <img src={ props.animal.imageURL } alt={ props.animal.imageDescription }/>
      <main>
        <dl>
          <dt>Sex</dt>
          <dd>{ props.animal.sex }</dd>
          <dt>Age</dt>
          <dd>{ props.animal.age }</dd>      
          <dt>Breed</dt>
          <dd>{ props.animal.breed }</dd> 
          <dt>Story</dt>
          <dd>{ props.animal.story }</dd> 
        </dl>
        <button onClick={() => props.dispatch(adoptAnimal(props.breed))} />
      </main>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  animal: state[props.breed + 'ToAdopt'], 
});

export default connect(mapStateToProps)(pet);
