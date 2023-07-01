import logo from './logo.svg';
import AddComponent from './Admin/pages/AddComponent';
import AllComponents from './Admin/pages/AllComponents';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Components from './pages/Components';
import ViewComponent from './pages/ViewComponent';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


import LoginPage from './Admin/pages/LoginPage';

function App() {
  return (
    <div className="d-flex flex-column h-100 bg-light">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<Components />} />
          <Route path="/view-component" element={<ViewComponent />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Area Routes*/}
          <Route path="/admin" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
