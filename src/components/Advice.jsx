import { useContext } from "react";
import AdviceContext from "../context/AdviceContext";
import Spinner from "./Spinner";
import { ReactComponent as PatternDividerDesktop } from "../assets/images/pattern-divider-desktop.svg";
import { ReactComponent as PatternDividerMobile } from "../assets/images/pattern-divider-mobile.svg";
import { ReactComponent as DiceIcon } from "../assets/images/icon-dice.svg";

const Advice = () => {
  const { loading, advice, setLoading, fetchAdvice, minWidth } =
    useContext(AdviceContext);

  const handleClick = () => {
    setLoading(true);
    fetchAdvice();
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="advice">
      <p className="adviceId">ADVICE #{advice?.id}</p>
      <p className="adviceText">"{advice?.advice}"</p>
      {!minWidth ? (
        <PatternDividerDesktop className="divider" />
      ) : (
        <PatternDividerMobile className="divider" />
      )}

      <div className="diceWrapper" onClick={handleClick}>
        <DiceIcon className="dice" />
      </div>
    </div>
  );
};

export default Advice;
