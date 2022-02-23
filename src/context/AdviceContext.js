import { createContext, useState, useEffect } from "react";

const AdviceContext = createContext();

export const AdviceContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await response.json();
    setAdvice(slip);
  };

  return (
    <AdviceContext.Provider
      value={{ loading, advice, setLoading, fetchAdvice }}
    >
      {children}
    </AdviceContext.Provider>
  );
};

export default AdviceContext;
