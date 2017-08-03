
import React ,{Component} from 'react';

class Component1 extends Component
{

  constructor()
  {
    super();
    this.state = {
      showMessage : true
    };
  }
  render()
  {
    return(
       <div>
        <h1>{this.state.showMessage ? this.props.message : ''}</h1>
       </div>

    );

  }

}

export default Component1;
