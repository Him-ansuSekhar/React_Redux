import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { connect, Provider } from 'react-redux';
import {store} from './redux/configureStore';
import {increaseAction, decreaseAction} from './redux/actions/counterActions';
import { Counter } from './components/counter';


                                         
const mapStateToProps=(state)=>{
  return {value: state.count}
}

const mapDispatchToProps=(dispatch)=>{
  return {increment:()=>dispatch(increaseAction), 
          decrement:()=>dispatch(decreaseAction)}
}

const MyCounter= connect(mapStateToProps,mapDispatchToProps)(Counter);
export default MyCounter; 


ReactDOM.render(
  <Provider store={store}><MyCounter /></Provider>,
  document.getElementById('root')
);
