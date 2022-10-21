import MainPage from './pages/main/index.js'
import './scss/index.scss'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<MainPage />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
