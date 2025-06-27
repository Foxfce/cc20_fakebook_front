import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from "./routes/AppRouter"

function App() {

  return (
    <>
      <ToastContainer
        position='top-center'
        style={{
          zIndex: 9999,
        }}
      />
      <AppRouter />
    </>
  )
}

export default App
