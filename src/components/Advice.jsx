import { useContext } from "react";
import AdviceContext from "../context/AdviceContext";
import { ReactComponent as PatternDividerDesktop } from "../assets/images/pattern-divider-desktop.svg";
import { ReactComponent as DiceIcon } from "../assets/images/icon-dice.svg";

const Advice = () => {
  const { loading, advice, setLoading, fetchAdvice } =
    useContext(AdviceContext);

  const handleClick = () => {
    setLoading(true);
    fetchAdvice();
    setLoading(false);
  };
  return (
    <div className="advice">
      <p className="adviceId">ADVICE #{advice?.id}</p>
      <p className="adviceText">"{advice?.advice}"</p>
      <PatternDividerDesktop className="divider" width="444px" />
      <div className="diceWrapper" onClick={handleClick}>
        <DiceIcon className="dice" />
      </div>
    </div>
  );
};

export default Advice;
