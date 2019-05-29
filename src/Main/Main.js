import React, { Component } from 'react';

import './Main.css';

class Main extends Component {
constructor(props){
  super(props);

  this.state = {
    click:0;
  };
}

updateCount(){
  this.setState((prevState,props)=>{
    return{
      click:prevState.click +1
    };
  });
}

  render() {
    return (
      <div className="main">
<div class="round" onClick={()=>updateCount()}>{this.state.click}
<div class="number">0</div>
</div>
      </div>
    );
  }
}

export default Main;
