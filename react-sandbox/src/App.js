import React from 'react';
import './App.css';
import NavAppBar from './components/nav-app-bar'
import MarketChipSelect from './components/market-chip-select'
import StocksDataGrid from './components/stocks-data-grid'

function App() {
  return (
    <div className="App">
      <NavAppBar/>
      <MarketChipSelect/>
      <StocksDataGrid/>
    </div>
  );
}

export default App;