import { useContext } from "react";
import AdviceContext from "../context/AdviceContext";

const Advice = () => {
  const { loading, advice, setLoading, fetchAdvice } =
    useContext(AdviceContext);
  return (
    <div className="advice">
      <p className="adviceId">#{advice.id}</p>
      <p className="adviceText">{advice.advice}</p>
    </div>
  );
};

export default Advice;
