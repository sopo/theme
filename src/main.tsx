import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Components from './pages/components.tsx';
import FormComponents from './pages/form-components.tsx';
import '../src/i18n/index.ts';
import LoginForm from './components/forms/login-form/login-form.tsx';
import AuthLayout from './pages/layouts/auth-layout.tsx';
import RegisterForm from './components/forms/register-form/register-form.tsx';
import ResetPasswordForm from './components/forms/reset-password-form/reset-password-form.tsx';
import Preview from './pages/preview/Preview.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="components" element={<Components />} />
       <Route path="forms" element={<FormComponents />} />
       <Route path="preview" element={<Preview />} />

       <Route path="/auth" element={<AuthLayout/>}>
       <Route index element={<Navigate to="login" replace />} />
       <Route path="login" element={<LoginForm />}/>
       <Route path="register" element={<RegisterForm />}/>
       <Route path="reset-password" element={<ResetPasswordForm />}/>
       
       </Route>
       
    </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
