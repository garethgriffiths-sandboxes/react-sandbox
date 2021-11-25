import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div> App
          </div>} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
