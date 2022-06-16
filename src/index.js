import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Products from './components/Products'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FilterCat from './components/FilterCat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Products />}/>
          <Route path='/:categories' element={<FilterCat />}/>
        </Route>
      </Routes>
    
    </Router>
  </React.StrictMode>
);

reportWebVitals();
