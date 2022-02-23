import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const AdviceContext = createContext();

export const AdviceContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [advice, setAdvice] = useState(null);
  const [minWidth, setMinWidth] = useState(false);

  useEffect(() => {
    reportWindowSize();
    fetchAdvice();
  }, []);

  function reportWindowSize() {
    if (window.outerWidth <= 375) {
      setMinWidth(true);
    } else {
      setMinWidth(false);
    }
  }

  window.onresize = reportWindowSize;

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await response.json();
      setAdvice(slip);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch advice!");
    }
  };

  return (
    <AdviceContext.Provider
      value={{ loading, advice, minWidth, setLoading, fetchAdvice }}
    >
      {children}
    </AdviceContext.Provider>
  );
};

export default AdviceContext;
