import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Components from './pages/components.tsx';
import FormComponents from './pages/form-components.tsx';
import '../src/i18n/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="components" element={<Components />} />
       <Route path="forms" element={<FormComponents />} />
       
    </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
