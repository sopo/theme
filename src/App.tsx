

import { Outlet } from 'react-router'
import './App.css'
import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider,} from './components/ui/sidebar'


export default function App() {


  return (
     <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
   
        <Outlet />
      </main>
    </SidebarProvider>
  )
}


