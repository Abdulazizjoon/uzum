import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './layouts/layout';
import Details from './components/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home></Home>
            </Layout>
          }
        ></Route>
        <Route
          path="/details/:id"
          element={
            <Layout>
              <Details></Details>
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App