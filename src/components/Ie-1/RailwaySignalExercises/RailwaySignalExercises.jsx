import { useState } from "react";
import style from "./RailwaySignalExercises.module.scss";
import RailwaySignal from "../RailwaySignal/RailwaySignal";
import { railwaySignals } from "../../../suchData/railwaySignals";
import Questions from "../Questions/Questions";
import PointsCounter from "../../PointsCounter/PointsCounter";

const RailwaySignalExercises = () => {
  const questionsData = railwaySignals;

  const [table, setTable] = useState([0, 0, 0, 0]);
  const [correctlyAnwers, setCorrectlyAnwers] = useState(questionsData);
  const [numOfQuestion, setNumOfQuestion] = useState(0);
  const changeColor = (pos) => {
    const index = pos - 1;
    let num = table[index];
    num++;
    if (num > 6) {
      num = 0;
    }
    let secTable = table;
    secTable[index] = num;
    setTable([...secTable]);
  };

  const nextQuestion = (e) => {
    if (numOfQuestion < questionsData.length - 1) {
      setNumOfQuestion(numOfQuestion + 1);
    }
  };
  const prevQuestion = (e) => {
    if (numOfQuestion > 0) {
      setNumOfQuestion(numOfQuestion - 1);
    }
  };
  const checkQuestion = () => {
    const userChose = table;
    const correctlyAnwer = questionsData[numOfQuestion].code;
    if (
      userChose.length === correctlyAnwer.length &&
      correctlyAnwer.every((val, index) => val === userChose[index])
    ) {
      let updateAnswer = correctlyAnwers;
      updateAnswer[numOfQuestion].correct = true;
      setCorrectlyAnwers([...updateAnswer]);
      console.log(correctlyAnwers);
      nextQuestion();
    } else {
      let updateAnswer = correctlyAnwers;
      updateAnswer[numOfQuestion].correct = false;
      setCorrectlyAnwers([...updateAnswer]);
      nextQuestion();
      setTable([0, 0, 0, 0]);
    }
  };
  const showAnswer = () => {
    setTable([...correctlyAnwers[numOfQuestion].code]);
  };
  return (
    <>
      <section className={style.test}>
        <div className={style.test__exercises}>
          <RailwaySignal onClick={changeColor} table={table} />
          <Questions question={questionsData[numOfQuestion]} />
        </div>
        <div className={style.test__btn}>
          <button
            onClick={checkQuestion}
            className={style.test__btn__check}
            type="button"
          >
            Sprawdź
          </button>
          <button
            onClick={showAnswer}
            className={style.test__btn__show}
            type="button"
          >
            Pokaż
          </button>
          <button
            onClick={prevQuestion}
            className={style.test__btn__prev}
            type="button"
          >
            Poprzednie
          </button>
          <button
            className={style.test__btn__next}
            onClick={nextQuestion}
            type="button"
          >
            Następne
          </button>
        </div>
        <div className={style.test__pointerCounter}>
          <PointsCounter pointsTable={correctlyAnwers} />
        </div>
      </section>
    </>
  );
};

export default RailwaySignalExercises;
