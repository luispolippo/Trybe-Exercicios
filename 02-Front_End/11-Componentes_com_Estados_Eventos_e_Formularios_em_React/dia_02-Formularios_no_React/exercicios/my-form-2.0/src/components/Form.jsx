import React from 'react'
import LastJobData from './LastJobData';
import PersonalData from './PersonalData';

class Form extends React.Component {
  render() {
    return(
      <div className="form">
      <PersonalData />
      <LastJobData />
      </div>
    );
  }
}

export default Form;