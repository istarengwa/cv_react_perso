import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import SoftSkill from './page/Softskill.jsx';
import Project from './page/Project.jsx';
import Layout from './components/Main/Layout';
// import ErrorNotFoundPage from './pages/NotFoundedPage' 404;
// import ServorErrorPage from './pages/ServorErrorPage' 500;

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/softskill" element={<SoftSkill />} />
            </Routes>
          </Layout>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;