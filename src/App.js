import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import Routers from './routers';

const App = () => {
  // const stateGlobal = useSelector((state) => state);
  // console.log('stateGlobal from APP : ', stateGlobal);
  return (
    <NavigationContainer>
			<Routers />
		</NavigationContainer>
  );
};

export default App;
