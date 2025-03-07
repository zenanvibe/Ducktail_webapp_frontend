import React from "react";
import Routing from "./routes/Routing";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
    <div>
      <Routing />
      {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} /> */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
