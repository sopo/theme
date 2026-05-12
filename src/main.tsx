import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Components from './pages/components.tsx';
import LoginForm from './components/forms/login-form.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="components" element={<Components />} />
       <Route path="login-form" element={<LoginForm />} />
    </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
