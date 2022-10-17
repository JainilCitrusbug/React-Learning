import logo from './logo.svg';
import './App.css';
import React from 'react';

// Custom Imports
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ChangeCase from './components/ChangeCase';
import List from './components/List';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import EffectHookOne from './components/EffectHookOne';
import MouseContainer from './components/MouseContainer';
import HookTimer from './components/HookTimer';
import DataFatching from './components/DataFatching';
import DataFatchingTwo from './components/DataFatchingTwo';
import ComponentA from './components/ComponentA';
import ReducerHook from './components/ReducerHook';
import ReducerHookTwo from './components/ReducerHookTwo';
import DataFatchingThree from './components/DataFatchingThree';

export const firstNameContext = React.createContext()
export const lastNameContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <EffectHookOne />
      <MouseContainer />
      <HookTimer /> */}
      {/* <DataFatching /> */}
      {/* <DataFatchingTwo /> */}
      {/* <firstNameContext.Provider value={'Jainil'}>
        <lastNameContext.Provider value={'Citrusbug'}>
          <ComponentA />
        </lastNameContext.Provider>
      </firstNameContext.Provider> */}
      {/* <ReducerHook /> */}
      {/* <ReducerHookTwo /> */}
      <DataFatchingThree />
    </div>
  );
}

export default App;
