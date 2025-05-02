import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
    </QueryClientProvider></AuthProvider>
  </StrictMode>,
)
