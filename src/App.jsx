import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutMePage } from './pages/AboutMePage';
import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { Layout } from './pages/Layout';
import { ContactPage } from './pages/ContactPage';

function App() {


  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/aboutme' element={<AboutMePage />} />
          <Route path='/experience' element={<ExperiencePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App