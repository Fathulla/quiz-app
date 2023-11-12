import React from "react";
import "./styles/main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import StepTwo from "./pages/StepTwo";
import StepOne from "./pages/StepOne";
import StepFour from "./pages/StepFour";
import StepThree from "./pages/StepThree";
import Thanks from "./pages/Thanks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/step-one",
    element: <StepOne />,
  },
  {
    path: "/step-two",
    element: <StepTwo />,
  },
  {
    path: "/step-three",
    element: <StepThree />,
  },
  {
    path: "/step-four",
    element: <StepFour />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
};

export default App;
