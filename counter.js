import React, {Component} from 'react'; 

export class Counter extends Component{
    render(){
      const {value, increment, decrement}=this.props;
      

      return(
        <div>
          <p>{value}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      );
    }
  }