import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RootView } from './views/RootView';
import { GuestlineApiContextProvider } from './components/context/GuestlineApiContextProvider';
import { HotelsView } from './views/hotels/HotelsView';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route
          path="hotels/*"
          element={
            <GuestlineApiContextProvider>
              <HotelsView />
            </GuestlineApiContextProvider>
          }
        />
        <Route index element={<RootView />} />
      </Route>
    </Routes>
  );
}

export default App;
