
import AuthProvider from './context/AuthProvider'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <AuthProvider>
      <Toaster
                position="top-right"
                richColors
                theme="dark"
            />
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
