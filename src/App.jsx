import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from "./routes/AppRouter"
import useUserStore from './stores/userStore'
import { useEffect } from 'react';
import isTokenExpired from './utils/isTokenExpired';

function App() {
  const token = useUserStore(state => state.token);
  const logOut = useUserStore(state => state.logout);

  useEffect(()=>{
    if(isTokenExpired(token)){
      console.log('Token is expired');
      logOut();
    }
  },[])

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
