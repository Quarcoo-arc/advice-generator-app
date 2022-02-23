import Advice from "./components/Advice";
import Footer from "./components/Footer";
import { AdviceContextProvider } from "./context/AdviceContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <AdviceContextProvider>
      <div className="container">
        <Advice />
        <Footer />
      </div>
      <ToastContainer />
    </AdviceContextProvider>
  );
}

export default App;
