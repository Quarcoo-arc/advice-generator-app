import Advice from "./components/Advice";
import { AdviceContextProvider } from "./context/AdviceContext";

function App() {
  return (
    <AdviceContextProvider>
      <div>
        <Advice />
      </div>
    </AdviceContextProvider>
  );
}

export default App;
