import React from "react";
import Routing from "./routes/Routing";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Routing />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
