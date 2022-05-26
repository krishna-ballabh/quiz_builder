import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const QuestionUploadForm = () => {
  const location = useLocation();

  const [question, setQuestion] = useState({
    title: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    randomKey: "",
  });

  const [isAdded, setIsAdded] = useState(false);

  const [addQuestionDetails, setAddQuestionDetails] = useState([]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setQuestion((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    setIsAdded(false);
  };

  const addEvent = (e) => {
    setAddQuestionDetails((prevData) => {
      return [...prevData, question];
    });
    setIsAdded(true);
    document.getElementById("form").reset();
  };

  const addTOStorage = () => {
    const random = Math.random().toString(36).substring(5);
    addQuestionDetails[0].randomKey = random;
    localStorage.setItem(
      random + location.state.user + `${question.title}`,
      JSON.stringify(addQuestionDetails)
    );
    alert("your Quiz is Created You can see it in Show Quizzes Section");
    setAddQuestionDetails([]);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center text-bg-info h2">
            Enter Quiz Details
          </div>
          <div className="col-md-4"></div>
        </div>
        {isAdded ? (
          <h5 className="text-bg-success">Question is Added</h5>
        ) : null}
        <form className="mt-5" id="form">
          <div className="row">
            <label
              htmlFor="quiz_title"
              className="form-check-label col-md-2 h5"
            >
              Enter Quiz Title :
            </label>
            <input
              type="text"
              id="quiz_title"
              name="title"
              value={question.title}
              onChange={inputEvent}
              className="col-md-8"
              placeholder="Title..."
            ></input>
          </div>
          <div className="row mt-3">
            <label htmlFor="question" className="form-check-label col-md-2 h6">
              Enter Question :
            </label>
            <textarea
              rows=""
              id="question"
              name="question"
              columns=""
              value={question.question}
              className="form-text col-md-8"
              placeholder="Write a Question"
              onChange={inputEvent}
            />
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <input
                placeholder="option1"
                name="option1"
                className="mt-3 w-25"
                type="text"
                value={question.option1}
                onChange={inputEvent}
              />
              <input
                placeholder="option2 "
                name="option2"
                type="text"
                className="mt-3 w-25"
                value={question.option2}
                onChange={inputEvent}
              />
              <input
                placeholder="option3"
                name="option3"
                type="text"
                className="mt-3 w-25"
                value={question.option3}
                onChange={inputEvent}
              />
              <input
                placeholder="option4"
                name="option4"
                type="text"
                className="mt-3 w-25"
                value={question.option4}
                onChange={inputEvent}
              />
              <input
                placeholder="Enter the Correct ansnwer"
                name="answer"
                type="text"
                className="mt-3 w-25"
                value={question.answer}
                onChange={inputEvent}
              ></input>

              <div
                type="submit"
                onClick={addEvent}
                className="btn btn-primary mt-4"
              >
                Add Question
              </div>
              <div
                type="submit"
                className="btn btn-primary mt-4 "
                onClick={addTOStorage}
                style={{ marginLeft: "5px" }}
              >
                Make Quiz
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default QuestionUploadForm;
