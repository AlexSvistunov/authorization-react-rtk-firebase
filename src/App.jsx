
import './App.css'
import AppRoutes from './components/Routes/AppRoutes'

function App() {

  return (
    <>
      <AppRoutes/>
    </>
  )
}

console.log(import.meta.env.VITE_FIREBASE_API_KEY);

export default App
