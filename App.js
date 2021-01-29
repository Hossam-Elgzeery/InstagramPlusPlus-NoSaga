

import React from 'react';




import MainStore from './src/stores/MainStore'
import {Provider} from 'react-redux'

;
import MainContainer from './src/navigators/MainContainer';

const App = () => {





  return (
    <Provider store={MainStore}>
      <MainContainer />
    </Provider>
  );
};



export default App;
