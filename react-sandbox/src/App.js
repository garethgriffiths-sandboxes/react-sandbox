import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocumentationGeneratorApp from "./DocumentationGenerator/App";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <DocumentationGeneratorApp />
            </div>
          }
          exact
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
