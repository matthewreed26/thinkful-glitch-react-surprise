import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

// Update this component
export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showImage: false};
    }
  
    setShowImage(showImage){
      this.setState({showImage})
    }

    render() {
        // Show the button to start with
        if(this.state.showImage){
          return <SurpriseImage />;
        }
        return <div onClick={()=>this.setShowImage(true)}><SurpriseButton /></div>;
    }
}
