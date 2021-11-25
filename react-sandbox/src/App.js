import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import DocumentationGenerator from './DocumentationGenerator/components/DocumentationGenerator'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <DocumentationGenerator></DocumentationGenerator>
          </div>} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
