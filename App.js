

import React from 'react';
import MainStack from './src/Navigation/MainStack/Mainstack';



const App= () => {
 
  return (
   
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={true} />
     <NavigationContainer>
        <MainStack />
        </NavigationContainer>
    </>
  );
};



export default App;
