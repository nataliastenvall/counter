import React, {
  Component
} from 'react';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{
          age: 35,
          name: 'Maria'
        },
        {
          age: 45,
          name: 'Margit'
        },
        {
          age: 85,
          name: 'Mia'
        },
      ]
    }
  }

  changeState = () => {
    console.log('dadaaaaa');
    this.setState({
      persons: [
        {age: 35, name: 'Nina'},
        {age: 45, name: 'Nata'},
        {age: 85, name: 'Nonna'},
      ]
    })
  }

  render() {
    return ( <div className = "header" >
      <h1> How many clicks you can make ? < /h1>
      <h2> Maybe {
        Math.floor(Math.random() * 25)
      }
      times ? </h2>
      <h2 > My friend is {this.state.persons[0].name},
      she is {this.state.persons[0].age}
      years old </h2>

      <button onClick = {this.changeState} > Look at me < /button>
      </div>
    );
  }
}

export default Header;
