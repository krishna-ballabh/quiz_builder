import React from "react";
import Start from "./Start";
import { useLocation } from "react-router-dom";
import Question from "./Question";
import End from "./End";
import { useState, useEffect } from "react";

let interval;

const TakeQuiz = () => {
  const [step, setStep] = useState(1);

  const [activeQuestion, setActiveQuestion] = useState(0);

  const [answers, setAnswers] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [time, setTime] = useState(0);

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const location = useLocation();

  const quizKey = location.pathname.substring(27);

  useEffect(() => {
    const keyArr = Object.keys(localStorage);
    keyArr.some((user) => {
      if (user.includes(quizKey)) {
        setQuizData(JSON.parse(localStorage.getItem(user)));
      }
    });
  }, []);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && (
        <Question
          data={quizData[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End results={answers} data={quizData} onReset={resetClickHandler} />
      )}
    </div>
  );
};

export default TakeQuiz;
