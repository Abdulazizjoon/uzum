import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./layouts/Layout";
import Details from "./components/Details";
import Card from "./components/Card";
import ErorPage from "./components/ErorPage";

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
        <Route
          path="/card"
          element={
            <Layout>
              <Card></Card>
            </Layout>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Layout>
              <ErorPage></ErorPage>
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
