import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from "./routes";

function App() {
  return (
      <>
      <ToastContainer autoClose={1000} />
      <RoutesApp />    
      </>
  );
}

export default App;
