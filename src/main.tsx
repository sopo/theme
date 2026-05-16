import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import FormComponents from './pages/form-components.tsx';
import '../src/i18n/index.ts';
import LoginForm from './components/forms/login-form/login-form.tsx';
import AuthLayout from './pages/layouts/auth-layout.tsx';
import RegisterForm from './components/forms/register-form/register-form.tsx';
import ResetPasswordForm from './components/forms/reset-password-form/reset-password-form.tsx';
import Preview from './pages/preview/Preview.tsx';
import Colors from './pages/colors.tsx';
import Form from './pages/components.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="colors" element={<Colors />} />
      <Route path="components" element={<Form />} />
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
