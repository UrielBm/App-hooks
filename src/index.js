import React from 'react';
import ReactDOM from 'react-dom';
import { FocusSreeen } from './components/04-useRef/FocusSreeen';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCoustomHooks } from './components/02-useEffect/FormWithCoustomHooks';
import { MultipleCustomHook } from './components/03-example/MultipleCustomHook';
//  import { HooksApp } from './HooksApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCostumHook } from './components/01-useState/CounterWithCostumHook';



ReactDOM.render(
    //  <HooksApp />,
    // <FocusSreeen />,
    <MultipleCustomHook/>,
  document.getElementById('My-app-hooks')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
