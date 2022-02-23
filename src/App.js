import Advice from "./components/Advice";
import { AdviceContextProvider } from "./context/AdviceContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <AdviceContextProvider>
      <div>
        <Advice />
      </div>
      <ToastContainer />
    </AdviceContextProvider>
  );
}

export default App;
