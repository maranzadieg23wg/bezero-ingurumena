import React from 'react';
import Header from './header';
import CMain from './body/c_main';

import { DataProvider } from './ajax';

function App() {
  return (
    <DataProvider>
      <div>
        <Header />
        <CMain />
      </div>
    </DataProvider>
  );
}

export default App;
